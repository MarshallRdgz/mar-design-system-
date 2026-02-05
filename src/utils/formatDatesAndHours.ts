import { DateTime } from "luxon";
/**
 * Starting from a time offset returns a string to be used in luxon functions as the zone option
 * @param utcTimeOffset an integer between -12 and 14, corresponding to a valid UTC offset. If no value or an invalid value is provided the DEFAULT will be -6 (the time zone for México, by definition)
 * @returns a valid timezone to be used as the zone in luxon DateTime.fromISO function
 */
export const getUtcOffsetForLuxon = (utcTimeOffset?: number) => {
  const isValidTimeZone =
    typeof utcTimeOffset === "number" &&
    utcTimeOffset <= 14 &&
    utcTimeOffset >= -12;
  // range of valid utc zones was taken from https://en.wikipedia.org/wiki/List_of_UTC_offsets
  const integerTimeOffset = utcTimeOffset?.toFixed();
  const zoneNumber =
    utcTimeOffset && utcTimeOffset < 0
      ? integerTimeOffset
      : `+${utcTimeOffset}`;
  const timeZone = isValidTimeZone ? `utc${zoneNumber}` : "utc-6";
  const timeZoneText = timeZone.replace("utc", "GMT");
  return { timeZone, timeZoneText };
};

/**
 * Takes a date and returns a datetime in the utc-0 timezone corresponding to the original date at 13:00 of the provided utcTimeOffset (default is utc-6, ie MX timezone)
 * @param dateValueIsoFormat a date in ISO format, eg ("2023-07-13")
 * @param utcTimeOffset an integer between -12 and 14, corresponding to a valid UTC offset. If no value or an invalid value is provided the DEFAULT will be utc-6 (ie MX timezone)
 * @returns a datetime in ISO string format in the utc (zulu-time) timezone. The date corresponds to the original date (choose to be at 13:00 of the utcTimeOffset or MX by default) transformed to the zulu (utc) time
 */
export const convertSimpleDateToDateTimeZulu = (
  dateValueIsoFormat: string,
  utcTimeOffset?: number
) => {
  const dateWithHour = `${dateValueIsoFormat}T13:00:00.000`; // by definition all dates are set at 13:00 hours https://nudosplatform.atlassian.net/browse/NUD-2050
  const { timeZone } = getUtcOffsetForLuxon(utcTimeOffset);
  const dateTimeInOriginalZone = DateTime.fromISO(dateWithHour, {
    zone: timeZone || "utc",
  }).toString();
  const dateTimeInUTC0 = DateTime.fromISO(dateTimeInOriginalZone, {
    zone: "utc",
  }).toString();
  return dateTimeInUTC0;
};

/**
 * Takes a datetime in ISO format and transform it to its equivalent in the desired utc time zone (if no param is provided default is MX)
 * @param dateValueIsoFormat a string with a datetime in ISO format, eg ("2023-07-13T13:00:00.000Z")
 * @param utcTimeOffset an integer between -12 and 14, corresponding to a valid UTC offset. If no value or an invalid value is provided the DEFAULT will be utc-6 (ie MX timezone)
 * @returns The original datetime in ISO string format TRANSFORMED to the desired utcTimeOffset (DEFAULT is utc-6).
 */
export const displayDateInChosenTimeZone = (
  dateValueIsoFormat: string,
  utcTimeOffset?: number
) => {
  const { timeZone } = getUtcOffsetForLuxon(utcTimeOffset);
  const dateInDesiredTimeZone = DateTime.fromISO(dateValueIsoFormat, {
    zone: timeZone,
  }).toString();
  return dateInDesiredTimeZone;
};

/**
 * Takes a datetime in ISO format and returns a formatted date in the desired utc time zone to be passed as value to an html input of type date
 * @param dateValueIsoFormat a string with a date in ISO format, eg ("2023-07-13")
 * @param utcTimeOffset an integer between -12 and 14, corresponding to a valid UTC offset. If no value or an invalid value is provided the DEFAULT will be 0 (ie utc or zulu time)
 * @returns The date in the utcTimeOffset time zone (DEFAULT is utc-0) TRANSFORMED to a format accepted by an HTML input element of type date
 */
export const formatDateToPicker = (
  dateValueIsoFormat?: string,
  utcTimeOffset?: number
) => {
  if (!dateValueIsoFormat) return undefined;
  const dateInAppropiateTimeZone = displayDateInChosenTimeZone(
    dateValueIsoFormat,
    utcTimeOffset
  );
  const formattedDate = DateTime.fromISO(dateInAppropiateTimeZone).toFormat(
    "yyyy-LL-dd"
  );
  return formattedDate;
};
