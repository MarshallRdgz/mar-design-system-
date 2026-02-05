import React, { useEffect, useState, useRef } from 'react';
import { ImentionableUser } from './MentionableUser/MentionableUser';
import MentionedUsers from './MentionedUsers/MentionedUsers';
import MentionableUsersList from './MentionableUsersList/MentionableUsersList';
import './BordMentions.scss';

const BordMentions = ({
  placeholder,
  style = {},
  userList = [],
  userListProps = {},
  updateMessageCallback,
  updateMentionedUsersCallback,
}: IBordMentionsProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [unmentionedUsers, setUnmentionedUsers] = useState<ImentionableUser[]>(userList);
  const [filteredUsers, setFilteredUsers] = useState<ImentionableUser[]>([]);
  const [mentionedUsers, setMentionedUsers] = useState<ImentionableUser[]>([]);
  const [search, setSearch] = useState('');

  const bordMentionsInputRef = useRef<HTMLDivElement>(null);
  const bordMentionsRef = useRef<HTMLDivElement>(null);

  const focusOnTextEnd = () => {
    if (!bordMentionsInputRef.current) return;
    bordMentionsInputRef.current.focus();
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(bordMentionsInputRef.current);
    range.collapse(false);
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const handleBeforeInput = (e: React.FormEvent<HTMLDivElement>) => {
    const inputEvent = e as unknown as InputEvent;
    if (!showOptions && inputEvent.data === '@') {
      e.preventDefault();
      return setShowOptions(true);
    }
    if (!showOptions || !inputEvent.data) return;
    e.preventDefault();
    setSearch(search + inputEvent.data);
  };

  const handleFocus = () => {
    if (!bordMentionsInputRef.current) return;
    if (!bordMentionsInputRef.current.innerText || bordMentionsInputRef.current.innerText === placeholder) {
      bordMentionsInputRef.current.innerText = '';
    }
  };

  const handleBlur = () => {
    if (!bordMentionsInputRef.current) return;
    if (!bordMentionsInputRef.current.innerText) {
      bordMentionsInputRef.current.innerText = placeholder;
    }
  };

  const handleSelectUser = (user: ImentionableUser) => {
    setMentionedUsers(prev => [...prev, user]);
    setUnmentionedUsers(prev => prev.filter(u => u.userId !== user.userId));
    setSearch('');
    focusOnTextEnd();
  };

  const handleRemoveUser = (user: ImentionableUser) => {
    setMentionedUsers(prev => prev.filter(u => u.userId !== user.userId));
    setUnmentionedUsers(prev => [...prev, user]);
    focusOnTextEnd();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!showOptions) return;
    if (e.key === 'Escape') {
      setShowOptions(false);
      setSearch('');
      focusOnTextEnd();
    }
    if (e.key === 'Backspace') {
      setSearch(search.slice(0, -1));
    }
  };

  const handleClick = () => {
    if (showOptions) return setShowOptions(false);
    bordMentionsInputRef.current?.focus();
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (bordMentionsRef.current && !bordMentionsRef.current.contains(e.target as Node)) {
      setShowOptions(false);
      setSearch('');
    }
  };

  useEffect(() => {
    // Filtra los usuarios no mencionados según el término de búsqueda y actualiza la lista de usuarios filtrados.
    const filteredUsers = unmentionedUsers.filter(user => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      const email = user.email.toLowerCase();
      const trimmedSearch = search.trim().toLowerCase();
      return fullName.includes(trimmedSearch) || email.includes(trimmedSearch);
    });
    setFilteredUsers(filteredUsers);
  }, [search, unmentionedUsers.length]);

  useEffect(() => {
    // Agrega un evento para manejar clics fuera del componente y lo elimina al desmontar.
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Actualiza el mensaje actual cuando hay un cambio en el contenido editable.
    const updateMessage = () => {
      updateMessageCallback?.(bordMentionsInputRef.current?.innerText?.trim() || '');
    };

    const currentRef = bordMentionsInputRef.current;
    currentRef?.addEventListener('input', updateMessage);

    return () => {
      currentRef?.removeEventListener('input', updateMessage);
    };
  }, []);

  useEffect(() => {
    // Llama al callback para actualizar los usuarios mencionados cada vez que cambian.
    updateMentionedUsersCallback?.(mentionedUsers);
  }, [mentionedUsers]);

  return (
    <div ref={bordMentionsRef} className="bordMentions" style={style} onKeyDown={handleKeyDown} onClick={handleClick}>
      {showOptions && (
        <MentionableUsersList
          search={search}
          users={filteredUsers}
          hideOptionsCallback={() => setShowOptions(false)}
          handleSelectUser={handleSelectUser}
          {...userListProps}
        />
      )}
      {mentionedUsers.length > 0 && (
        <MentionedUsers mentionedUsers={mentionedUsers} handleRemoveUser={handleRemoveUser} />
      )}
      <div className="bordMentionsInputContainer">
        <div
          ref={bordMentionsInputRef}
          className="bordMentionsInput"
          contentEditable="true"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onBeforeInput={handleBeforeInput}
          dangerouslySetInnerHTML={{ __html: placeholder }}
        />
      </div>
    </div>
  );
};

export default BordMentions;

export interface IBordMentionsProps {
  placeholder: string;
  style?: React.CSSProperties;
  userList?: ImentionableUser[];
  userListProps?: React.HTMLAttributes<HTMLDivElement>;
  updateMessageCallback?: (message: string) => void;
  updateMentionedUsersCallback?: (mentionedUsers: ImentionableUser[]) => void;
}
