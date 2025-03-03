import { formatDistance, format } from "date-fns";
import { vi } from "date-fns/locale";

export const formatDate = (dateString: string) => {
  const past = new Date(dateString);
  return formatDistance(past, new Date(), { addSuffix: true, locale: vi });
};

export const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);

  // Kiểm tra ngày hợp lệ
  if (isNaN(date.getTime())) {
    return "Ngày không hợp lệ";
  }

  return format(date, "dd/MM/yyyy HH:mm:ss", { locale: vi });
};
