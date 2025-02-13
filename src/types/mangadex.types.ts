import { MangadexApi } from "../api";
export type LocalizedString = Record<string, string>;

/***********************
 * API REQUEST
 ***********************/

/** Các tham số yêu cầu cho API `GET /manga` */
export type GetSearchMangaRequestOptions = {
  /** Số lượng kết quả trả về (Mặc định: 10) */
  limit?: number;
  /** Vị trí bắt đầu lấy dữ liệu, dùng để phân trang */
  offset?: number;
  /** Tiêu đề manga cần tìm */
  title?: string;
  /** Danh sách tác giả */
  authors?: string[];
  /** Danh sách họa sĩ */
  artists?: string[];
  /** Năm phát hành */
  year?: number;
  /** Các tag cần bao gồm */
  includedTags?: string[];
  /** Chế độ lọc tag (Mặc định: AND) */
  includedTagsMode?: "AND" | "OR";
  /** Các tag cần loại trừ */
  excludedTags?: string[];
  /** Chế độ loại trừ tag (Mặc định: OR) */
  excludedTagsMode?: "AND" | "OR";
  /** Trạng thái xuất bản của manga */
  status?: MangadexApi.Static.MangaPublicationStatus[];
  /** Mã ngôn ngữ gốc theo chuẩn ISO 639-1 (hai hoặc năm chữ cái) */
  originalLanguage?: string[];
  /** Mã ngôn ngữ gốc cần loại trừ theo chuẩn ISO 639-1 */
  excludedOriginalLanguage?: string[];
  /** Ngôn ngữ đã được dịch có sẵn theo chuẩn ISO 639-1 */
  availableTranslatedLanguage?: string[];
  /** Đối tượng độc giả */
  publicationDemographic?: MangadexApi.Static.MangaPublicationDemographic[];
  /** Danh sách ID của manga (tối đa 100 ID mỗi yêu cầu) */
  ids?: string[];
  /** Xếp hạng nội dung (Mặc định: ['safe', 'suggestive', 'erotica']) */
  contentRating?: MangadexApi.Static.MangaContentRating[];
  /** Lọc theo thời gian tạo (Định dạng: YYYY-MM-DDTHH:mm:SS) */
  createdAtSince?: string;
  /** Lọc theo thời gian cập nhật (Định dạng: YYYY-MM-DDTHH:mm:SS) */
  updatedAtSince?: string;
  /** Thứ tự sắp xếp kết quả (Mặc định: `{ latestUploadedChapter: 'desc' }`) */
  order?: MangadexApi.Static.GetSearchMangaOrder;
  /** Các mục cần bao gồm trong kết quả trả về */
  includes?: MangadexApi.Static.Includes[];
  /** Kiểm tra xem manga có chương có sẵn không (`0`, `1`, `true`, `false`) */
  hasAvailableChapters?: "0" | "1" | "true" | "false";
  /** ID của nhóm dịch (Định dạng UUID) */
  group?: string;
};

/***********************
 * API RESPONSE
 ***********************/
export type MangaResponse = {
  result: string;
  response: string;
  data: Manga[];
  limit: number;
  offset: number;
  total: number;
};

export type Manga = {
  id: string;
  type: "manga";
  attributes: MangaDexAttributes;
  relationships: MangaDexRelationship[];
};

// Định nghĩa kiểu dữ liệu cho thuộc tính của MangaDex
type MangaDexAttributes = {
  title: LocalizedString; // Tiêu đề manga theo nhiều ngôn ngữ (VD: { en: "Tên Tiếng Anh", ja: "Tên Nhật Bản" })
  altTitles: LocalizedString; // Danh sách tiêu đề thay thế theo nhiều ngôn ngữ
  description: LocalizedString; // Mô tả nội dung manga theo nhiều ngôn ngữ
  isLocked: boolean; // Xác định xem manga có bị khóa chỉnh sửa hay không
  links: LocalizedString; // Liên kết đến các trang bên ngoài (Amazon, MyAnimeList, AniList, v.v.)
  originalLanguage: string; // Ngôn ngữ gốc của manga (VD: "ja" cho tiếng Nhật)
  lastVolume: string | null; // Số tập cuối cùng được cập nhật (null nếu chưa có)
  lastChapter: string | null; // Số chương cuối cùng được cập nhật (null nếu chưa có)
  publicationDemographic: string | null; // Nhóm đối tượng độc giả (VD: "shounen", "seinen")
  status: "ongoing" | "completed" | "hiatus" | "cancelled"; // Trạng thái manga (đang ra, đã hoàn thành, tạm ngừng, bị hủy)
  year: number | null; // Năm phát hành
  contentRating: "safe" | "suggestive" | "erotica" | "pornographic"; // Phân loại độ tuổi của nội dung manga
  tags: MangaTag[]; // Danh sách các thể loại và chủ đề của manga
  state: string; // Trạng thái của manga (VD: "published")
  chapterNumbersResetOnNewVolume: boolean; // Xác định xem số chương có được đặt lại khi có tập mới không
  createdAt: string; // Thời gian tạo bản ghi manga
  updatedAt: string; // Thời gian cập nhật gần nhất
  version: number; // Phiên bản dữ liệu của manga
  availableTranslatedLanguages: string[]; // Danh sách các ngôn ngữ có bản dịch
  latestUploadedChapter: string; // ID của chương mới nhất được tải lên
};

// Định nghĩa kiểu dữ liệu cho các tag (thể loại, chủ đề, định dạng)
export type MangaTag = {
  id: string; // ID của tag
  type: string; // Loại dữ liệu (luôn là "tag")
  attributes: {
    name: LocalizedString; // Tên của tag theo nhiều ngôn ngữ (VD: { en: "Action", ja: "アクション" })
    description: LocalizedString; // Mô tả tag (thường trống)
    group: "genre" | "theme" | "format"; // Nhóm của tag: thể loại (genre), chủ đề (theme), định dạng (format)
    version: number; // Phiên bản của tag
  };
  relationships: any[]; // Danh sách các mối quan hệ liên kết (thường là rỗng)
};

export type MangaDexRelationship = {
  id: string;
  type: string;
  /** Chỉ xuất hiện nếu bạn thuộc thực thể Manga và có mối quan hệ với Manga */
  related:
    | "monochrome"
    | "main_story"
    | "adapted_from"
    | "based_on"
    | "prequel"
    | "side_story"
    | "doujinshi"
    | "same_franchise"
    | "shared_universe"
    | "sequel"
    | "spin_off"
    | "alternate_story"
    | "alternate_version"
    | "preserialization"
    | "colored"
    | "serialization";
  attributes: any | null;
};
