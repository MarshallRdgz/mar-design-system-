import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';
import BordSidebarWithFilters from './BordSidebarWithFilters';

const meta = {
  title: 'BordSidebarWithFilters',
  component: BordSidebarWithFilters,
  args: {
    title: 'Filtros',
    sidebarSuggestionFiltersTitle: '¿No sabes qué producto comprar?',
    logoProps: {
      onClick: (a: string, b: string | number) => alert(`Filtro seleccionado: ${a} con valor ${b}`),
      style: {
        cursor: 'pointer',
      },
    },
    updateFiltersCallback: fn(),
    dynamicFilters: [
      {
        filterIdentifier: 'marca',
        filterName: 'Marca',
        filterValues: [
          {
            label: 'Acer',
            value: 'Acer',
          },
          {
            isSelected: true,
            label: 'Apple',
            value: 'Apple',
          },
          {
            label: 'Asus',
            value: 'Asus',
          },
          {
            label: 'HP',
            value: 'HP',
          },
          {
            label: 'Lenovo',
            value: 'Lenovo',
          },
        ],
      },
      {
        filterIdentifier: 'procesador',
        filterName: 'Procesador',
        filterValues: [
          {
            label: 'Core i3',
            value: 'Core i3',
          },
          {
            label: 'Core i7',
            value: 'Core i7',
          },
          {
            label: 'Core i5',
            value: 'Core i5',
          },
          {
            label: 'M1',
            value: 'M1',
          },
          {
            isSelected: true,
            label: 'M2',
            value: 'M2',
          },
        ],
      },
      {
        filterIdentifier: 'memoria',
        filterName: 'Memoria',
        filterValues: [
          {
            isSelected: true,
            label: '16 GB',
            value: '16 GB',
          },
          {
            label: '8 GB',
            value: '8 GB',
          },
        ],
      },
      {
        filterIdentifier: '"almacenamiento"',
        filterName: 'Almacenamiento',
        filterValues: [
          {
            label: '64 GB SSD',
            value: '64 GB SSD',
          },
          {
            label: '128 GB SSD',
            value: '128 GB SSD',
          },
          {
            label: '256 GB SSD',
            value: '256 GB SSD',
          },
          {
            isSelected: true,
            label: '512 GB SSD',
            value: '512 GB SSD',
          },
        ],
      },
    ],
    suggestionFilters: [
      {
        filterIdentifier: 'profile',
        filterName: 'Perfil',
        filterValues: [
          {
            label: 'Financiero/Adm',
            value: 'Financiero/Adm',
            id: 1,
            description: '["Administradores","Financieros","Contadores","Compilance","Regulatorios"]',
          },
          {
            label: 'Diseño',
            value: 'Diseño',
            id: 2,
            description: '["Diseñador gráfico","Diseñador multimedia", "Diseñador de marketing", "Community manager"]',
          },
          {
            label: 'Comercial',
            value: 'Comercial',
            id: 3,
            description: '["Venta","Partnerships"]',
          },
          {
            label: 'Tecnología',
            value: 'Tecnología',
            id: 4,
            isSelected: true,
            description: '["TI","Desarrollo software","Ciber seguridad"]',
          },
          {
            label: 'Producto',
            value: 'Producto',
            id: 5,
            description: '["Diseñador UX/UI","Product manager","Project manager"]',
          },
          {
            label: 'Operativo',
            value: 'Operativo',
            id: 6,
            description: '["RRHH","Logística","Legal","Marketing/Comunicaciones","Procurement","Calidad"]',
          },
        ],
      },
      {
        filterIdentifier: 'line',
        filterName: 'Cargos',
        filterValues: [
          {
            label: 'Básicos',
            value: 'Basicos',
            id: 1,
            description: 'Perfil junior y/o baja carga laboral',
          },
          {
            label: 'Medios',
            value: 'Medios',
            id: 2,
            description: 'Perfiles medios como coordinadores, jefaturas, supervisores y/o carga laboral media/alta',
          },
          {
            label: 'Altos',
            value: 'Altos',
            id: 3,
            isSelected: true,
            description:
              'Perfiles avanzados como gerentes, manager, directivos, tomadores de decisiones y/o carga laboral alta',
          },
        ],
      },
    ],
  },
  decorators: Story => <div style={{ marginTop: '-1rem', marginLeft: '-1rem', marginBottom: '-1rem' }}>{Story()}</div>,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const EcommerceSidebar: Story = {};

export const Loading: Story = {
  args: {
    loadingDynamicFilters: true,
    loadingSuggestionFilters: true,
  },
};
