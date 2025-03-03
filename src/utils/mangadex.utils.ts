import { MangadexTypes } from "../types";

const defaultImage = "https://truyendex.com/images/truyendex-loading.jpg";

export const extendRelationship = (
  object: Record<string, any> & {
    relationships: MangadexTypes.MangaDexRelationship[];
  }
) => {
  return {
    ...object, //Giữ lại tất cả dữ liệu cũ
    ...Object.fromEntries(
      object.relationships.map((rela) => [rela.type, rela])
    ), //Thêm quan hệ mới mà không mutate object cũ
  };
};

export const getTitle = (manga: MangadexTypes.Manga | null | undefined) => {
  if (!manga) return "";
  return (
    manga.attributes.altTitles.find((t) => t["vi"])?.["vi"] ||
    manga.attributes.title?.["en"] ||
    Object.values(manga.attributes.title)?.[0] ||
    "No title"
  );
};

export const getAuthor = (
  manga: MangadexTypes.ExtendManga | null | undefined
) => {
  if (!manga) return "";
  return manga.author?.attributes?.name || "";
};

export const getDescription = (manga: MangadexTypes.Manga) => {
  if (!manga) return "";
  return (
    manga.attributes.description?.["vi"] ||
    manga.attributes.description?.["en"] ||
    "Đang cập nhật"
  );
};

export const getCoverImageAvata = (
  manga: MangadexTypes.ExtendManga | null | undefined
) => {
  if (!manga) return defaultImage;
  return manga.cover_art?.attributes
    ? `https://mangadex.org/covers/${manga.id}/${manga.cover_art.attributes.fileName}.512.jpg`
    : defaultImage;
};

export const getCoverImageBg = (
  manga: MangadexTypes.ExtendManga | null | undefined
) => {
  if (!manga) return defaultImage;
  return manga.cover_art?.attributes
    ? `https://mangadex.org/covers/${manga.id}/${manga.cover_art.attributes.fileName}`
    : defaultImage;
};

export const getChapterTitle = (chapter: MangadexTypes.Chapter | null) => {
  if (!chapter) return "";
  if (chapter.attributes.volume) {
    if (chapter.attributes.chapter) {
      return `Chương ${chapter.attributes.chapter} Tập ${chapter.attributes.volume}`;
    }
    return `Oneshot Tập ${chapter.attributes.volume}`;
  }
  if (chapter.attributes.chapter) return `Chương ${chapter.attributes.chapter}`;
  return "Oneshot";
};

export const getRating = (rating: number | null | undefined): string => {
  if (rating) {
    return rating.toFixed(2); // Trả về chuỗi
  }
  return "0.00"; // Đảm bảo cùng kiểu dữ liệu
};

export const getFollow = (follow: number): string => {
  if (follow < 1e3) return follow.toString(); // Đảm bảo luôn trả về string
  if (follow < 1e6) return `${(follow / 1e3).toFixed(1)}k`;
  return `${(follow / 1e6).toFixed(1)}m`;
};

export const getCmt = (cmt: number): string => {
  if (cmt < 1e3) return cmt.toString(); // Đảm bảo luôn trả về string
  if (cmt < 1e6) return `${(cmt / 1e3).toFixed(1)}k`;
  return `${(cmt / 1e6).toFixed(1)}m`;
};

export const getStatus = (status: string | null | undefined) => {
  switch (status) {
    case "cancelled":
      return "Bị huỷ";
    case "completed":
      return "Đã kết thúc";
    case "hiatus":
      return "Tạm ngưng";
    default:
      return "Đang tiến hành";
  }
};

export const getTranslateISOLanguage = (
  isoLanguage: string | null | undefined
) => {
  switch (isoLanguage) {
    case "ja":
      return "Nhật Bản";
    case "en":
      return "Tiếng Anh";
    case "vi":
      return "Việt Nam";
    case "ko":
      return "Hàn Quốc";
    case "zh":
      return "Trung Quốc";
    case "fr":
      return "Pháp";
    case "de":
      return "Đức";
    case "es":
      return "Tây Ban Nha";
    case "it":
      return "Ý";
    case "ru":
      return "Nga";
    case "pt":
      return "Bồ Đào Nha";
    case "id":
      return "Indonesia";
    case "th":
      return "Thái Lan";
    case "ms":
      return "Mã Lai";
    case "hi":
      return "Hindi";
    case "ar":
      return "Ả Rập";
    case "bn":
      return "Bengali";
    case "pa":
      return "Punjabi";
    case "jv":
      return "Javanese";
    case "te":
      return "Telugu";
    case "mr":
      return "Marathi";
    case "ta":
      return "Tamil";
    case "ur":
      return "Urdu";
    case "gu":
      return "Gujarati";
    case "kn":
      return "Kannada";
    case "ml":
      return "Malayalam";
    case "or":
      return "Odia";
    case "fa":
      return "Persian";
    case "tr":
      return "Turkish";
    case "pl":
      return "Polish";
    case "uk":
      return "Ukrainian";
    case "ro":
      return "Romanian";
    case "nl":
      return "Dutch";
    case "sv":
      return "Swedish";
    case "fi":
      return "Finnish";
    case "no":
      return "Norwegian";
    case "da":
      return "Danish";
    case "hu":
      return "Hungarian";
    case "cs":
      return "Czech";
    case "sk":
      return "Slovak";
    case "bg":
      return "Bulgarian";
    case "sr":
      return "Serbian";
    case "hr":
      return "Croatian";
    case "lt":
      return "Lithuanian";
    case "lv":
      return "Latvian";
    case "et":
      return "Estonian";
    case "sl":
      return "Slovenian";
    case "he":
      return "Hebrew";
    case "el":
      return "Greek";
    case "hy":
      return "Armenian";
    case "ka":
      return "Georgian";
    case "az":
      return "Azerbaijani";
    case "kk":
      return "Kazakh";
    case "uz":
      return "Uzbek";
    case "mn":
      return "Mongolian";
    case "ne":
      return "Nepali";
    case "si":
      return "Sinhala";
    case "my":
      return "Burmese";
    case "km":
      return "Khmer";
    case "lo":
      return "Lao";
    case "am":
      return "Amharic";
    case "sw":
      return "Swahili";
    case "yo":
      return "Yoruba";
    case "ig":
      return "Igbo";
    case "zu":
      return "Zulu";
    case "xh":
      return "Xhosa";
    case "af":
      return "Afrikaans";
    case "st":
      return "Sesotho";
    case "tn":
      return "Tswana";
    case "ts":
      return "Tsonga";
    case "ve":
      return "Venda";
    case "nr":
      return "Ndebele";
    case "ss":
      return "Swati";
    case "tn":
      return "Tswana";
    case "ts":
      return "Tsonga";
    case "ve":
      return "Venda";
    case "nr":
      return "Ndebele";
    case "ss":
      return "Swati";
    default:
      return isoLanguage;
  }
};

export const getMangaAltTitles = (
  manga: MangadexTypes.ExtendManga | null | undefined
) => {
  if (!manga) return [];
  return manga.attributes.altTitles
    .filter((aT) => aT["ja"] || aT["ja-ro"] || aT["en"])
    .map((aT) => Object.values(aT)[0]);
};

export const getFormatChapterList = (
  chapter: MangadexTypes.ExtendChapter[]
) => {
  const chapterFormat: Record<string, MangadexTypes.ExtendChapter[]> = {};
  for (const ch of chapter) {
    const chNumeber = ch.attributes.chapter;
    if (!chNumeber) continue;
    if (!chapterFormat[ch.attributes.chapter]) {
      chapterFormat[ch.attributes.chapter] = [];
    }
    chapterFormat[ch.attributes.chapter].push(ch);
    // Nếu chua có mảng con
  }
  return chapterFormat;
};

export const getRoleColor = (role: string): string => {
  switch (role) {
    case "ROLE_ADMIN":
      return "text-red-700";
    case "ROLE_BANNED":
      return "text-gray-600";
    case "ROLE_CONTRIBUTOR":
      return "text-blue-600";
    case "ROLE_DESIGNER":
      return "text-purple-600";
    case "ROLE_DEVELOPER":
      return "text-yellow-600";
    case "ROLE_FORUM_MODERATOR":
      return "text-green-600";
    case "ROLE_GLOBAL_MODERATOR":
      return "text-green-800";
    case "ROLE_GROUP_LEADER":
      return "text-pink-600";
    case "ROLE_GROUP_MEMBER":
      return "text-pink-400";
    case "ROLE_GUEST":
      return "text-gray-500";
    case "ROLE_MEMBER":
      return "text-blue-500";
    case "ROLE_MD_AT_HOME":
      return "text-indigo-600";
    case "ROLE_POWER_UPLOADER":
      return "text-orange-600";
    case "ROLE_PUBLIC_RELATIONS":
      return "text-cyan-600";
    case "ROLE_STAFF":
      return "text-red-600";
    case "ROLE_UNVERIFIED":
      return "text-gray-400";
    case "ROLE_USER":
      return "text-white";
    case "ROLE_VIP":
      return "text-yellow-500";
    default:
      return "text-gray-300"; // Màu mặc định nếu không khớp
  }
};
