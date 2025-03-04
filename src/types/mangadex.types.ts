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

export type GetChapterRequestOptions = {
  /**
   * ```console
   * Mặc định: 10
   * Tối thiểu: 0
   * Tối đa: 100
   * ```
   */
  limit?: number;
  offset?: number;
  /** Danh sách chuỗi UUID (giới hạn 100 mục mỗi yêu cầu) */
  ids?: string[];
  title?: string;
  /** Danh sách chuỗi UUID */
  groups?: string[];
  /** Chuỗi UUID hoặc danh sách chuỗi UUID */
  uploader?: string | string[];
  /** Chuỗi UUID */
  manga?: string;
  volume?: string | string[];
  chapter?: string | string[];
  /** Mã ngôn ngữ theo tiêu chuẩn ISO 639-1 (hai hoặc năm ký tự) */
  translatedLanguage?: string[];
  /** Mã ngôn ngữ theo tiêu chuẩn ISO 639-1 (hai hoặc năm ký tự) */
  originalLanguage?: string[];
  /** Mã ngôn ngữ theo tiêu chuẩn ISO 639-1 (hai hoặc năm ký tự) */
  excludedOriginalLanguage?: string[];
  contentRating?: MangadexApi.Static.MangaContentRating[];
  /** Chuỗi UUID */
  excludedGroups?: string[];
  /** Chuỗi UUID */
  excludedUploaders?: string[];
  /** Mặc định: '1' */
  includeFutureUpdates?: "0" | "1";
  includeEmptyPages?: 0 | 1;
  includeFuturePublishAt?: 0 | 1;
  includeExternalUrl?: 0 | 1;
  /** Định dạng thời gian: YYYY-MM-DDTHH:mm:SS */
  createdAtSince?: string;
  /** Định dạng thời gian: YYYY-MM-DDTHH:mm:SS */
  updatedAtSince?: string;
  /** Định dạng thời gian: YYYY-MM-DDTHH:mm:SS */
  publishAtSince?: string;
  order?: GetChapterOrder;
  includes?: ReferenceExpansionChapter;
};

export type GetChapterIdRequestOption = {
  includes?: ReferenceExpansionChapter;
};

export type ReferenceExpansionChapter = (
  | "manga"
  | "scanlation_group"
  | "user"
)[];

export type GetStatisticsRequestOptions = {
  manga: string[];
};

export type GetMangaIdFeedRequestOptions = {
  /**
   * ```console
   * Mặc định: 100
   * Tối thiểu: 1
   * Tối đa: 500
   * ```
   */
  limit?: number;
  /** Tối thiểu: 0 */
  offset?: number;
  /** Mã ngôn ngữ theo chuẩn ISO 639-1 (2 hoặc 5 ký tự) */
  translatedLanguage?: string[];
  /** Mã ngôn ngữ gốc theo chuẩn ISO 639-1 (2 hoặc 5 ký tự) */
  originalLanguage?: string[];
  /** Mã ngôn ngữ gốc bị loại trừ theo chuẩn ISO 639-1 (2 hoặc 5 ký tự) */
  excludedOriginalLanguage?: string[];
  /** Phân loại nội dung truyện */
  contentRating?: MangadexApi.Static.MangaContentRating[];
  /** Danh sách nhóm dịch bị loại trừ (UUID) */
  excludedGroups?: string[];
  /** Danh sách người đăng bị loại trừ (UUID) */
  excludedUploaders?: string[];
  /** Mặc định: 1 */
  includeFutureUpdates?: "0" | "1";
  /** Lọc theo thời gian tạo, định dạng: YYYY-MM-DDTHH:mm:SS */
  createdAtSince?: string;
  /** Lọc theo thời gian cập nhật, định dạng: YYYY-MM-DDTHH:mm:SS */
  updatedAtSince?: string;
  /** Lọc theo thời gian phát hành, định dạng: YYYY-MM-DDTHH:mm:SS */
  publishAtSince?: string;
  /** Tùy chọn sắp xếp */
  order?: MangadexApi.Static.GetMangaIdFeedOrder;
  /** Danh sách các thuộc tính mở rộng */
  includes?: MangadexApi.Static.Includes[];
};

export type GetMangaIdRequestOptions = {
  includes?: MangadexApi.Static.Includes[];
};

export type GetMangaAggregateRequestOptions = {
  translatedLanguage?: string[];
  groups?: string[];
};

/***********************
 * TYPE CHAPTER
 ***********************/

export type GetChapterIdResponse = {
  result: string;
  response: string;
  data: Chapter;
};

export type GetChapterOrder = {
  createdAt?: MangadexApi.Static.Order;
  updatedAt?: MangadexApi.Static.Order;
  publishAt?: MangadexApi.Static.Order;
  readableAt?: MangadexApi.Static.Order;
  volume?: MangadexApi.Static.Order;
  chapter?: MangadexApi.Static.Order;
};

export type ChapterAttributes = {
  /**
   * ```console
   * Độ dài tối đa: 255 ký tự
   * ```
   */
  title: string;
  volume: string;
  /**
   * ```console
   * Độ dài tối đa: 8 ký tự
   * ```
   */
  chapter: string;
  pages: number;
  /** Mẫu: `^[a-z]{2}(-[a-z]{2})?$` (Mã ngôn ngữ theo chuẩn ISO 639-1) */
  translatedLanguage: string;
  /** Chuỗi UUID (định danh của người tải lên) */
  uploader: string;
  /**
   * ```console
   * Độ dài tối đa: 512 ký tự
   * Mẫu: ^https?:// (Phải là một URL hợp lệ)
   * ```
   */
  externalUrl: string;
  /**
   * ```console
   * Giá trị tối thiểu: 1
   * ```
   */
  version: number;
  createdAt: string; // Thời gian tạo
  updatedAt: string; // Thời gian cập nhật
  publishAt: string; // Thời gian xuất bản
  readableAt: string; // Thời gian có thể đọc được
};

export type Relationship = {
  /** Chuỗi UUID (định danh duy nhất) */
  id: string;
  type: string;
  /** Chỉ có nếu thuộc tính này là quan hệ giữa các thực thể Manga */
  related:
    | "monochrome" // Phiên bản đơn sắc
    | "main_story" // Câu chuyện chính
    | "adapted_from" // Chuyển thể từ nguồn khác
    | "based_on" // Dựa trên một tác phẩm khác
    | "prequel" // Tiền truyện
    | "side_story" // Ngoại truyện
    | "doujinshi" // Doujinshi (tác phẩm do fan sáng tác)
    | "same_franchise" // Cùng một thương hiệu
    | "shared_universe" // Cùng vũ trụ
    | "sequel" // Hậu truyện
    | "spin_off" // Truyện phái sinh
    | "alternate_story" // Phiên bản truyện thay thế
    | "alternate_version" // Phiên bản khác của truyện
    | "preserialization" // Xuất bản trước khi chính thức
    | "colored" // Phiên bản có màu
    | "serialization"; // Đang trong quá trình phát hành
  /** Nếu có mở rộng tham chiếu, thuộc tính này sẽ chứa dữ liệu chi tiết */
  attributes: any | null;
};

export type Chapter = {
  /** UUID formatted string */
  id: string;
  type: "chapter";
  attributes: ChapterAttributes;
  relationships: Relationship[];
};

export type ChapterList = {
  /** Default: "ok" */
  result: string;
  /** Default: "collection" */
  response: string;
  data: Chapter[];
  limit: number;
  offset: number;
  total: number;
};

export type ExtendChapter = Chapter & {
  manga?: Manga;
  scanlation_group?: Partial<ScanlationGroup> &
    Pick<ScanlationGroup, "id" | "type">;
  user: User;
};

/***********************
 * API RESPONSE
 ***********************/
export type GetChapterResponse = ChapterList;

export type GetMangaResponse = {
  result: string;
  response: string;
  data: Manga[];
  limit: number;
  offset: number;
  total: number;
};

export type GetMangaIdResponse = {
  result: string;
  response: string;
  data: Manga;
};

export type GetStatisticsResponse = {
  result: string;
  statistics: Record<string, Statistics>;
};

export type GetMangaIdFeedResponse = {
  result: string;
  response: string;
  data: Chapter[];
  limit: number;
  offset: number;
  total: number;
};

// at home
export type GetAtHome = {
  result: string;
  baseUrl: string;
  chapter: ChapterAtHome;
};

export type ChapterAtHome = {
  hash: string;
  data: string[];
  dataSaver: string[];
};

export type GetMangaAggregateResponse = {
  result: "ok";
  volumes: Record<string, AggregateVolume>;
};

export type AggregateVolume = {
  volume: string;
  count: number;
  chapters: Record<string, AggregateChapter>;
};

export type AggregateChapter = {
  chapter: string;
  id: string;
  others: string[];
  count: number;
};

/***********************
 * TYPE MANGADEX
 ***********************/

export type Manga = {
  id: string;
  type: "manga";
  attributes: MangaDexAttributes;
  relationships: MangaDexRelationship[];
};

// Định nghĩa kiểu dữ liệu cho thuộc tính của MangaDex
type MangaDexAttributes = {
  title: LocalizedString; // Tiêu đề manga theo nhiều ngôn ngữ (VD: { en: "Tên Tiếng Anh", ja: "Tên Nhật Bản" })
  altTitles: LocalizedString[]; // Danh sách tiêu đề thay thế theo nhiều ngôn ngữ
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

export type Cover = {
  /** UUID formatted string */
  id: string;
  type: "cover_art";
  attributes: CoverAttributes;
  relationships: MangaDexRelationship[];
};

export type Author = {
  /** UUID formatted string */
  id: string;
  type: "author";
  attributes: AuthorAttributes;
  relationships: MangaDexRelationship[];
};

export type AuthorAttributes = {
  name: string;
  imageUrl: string;
  biography: LocalizedString;
  /** Pattern: ^https?:\/\/twitter\.com(\/|$) */
  twitter: string | null;
  /** Pattern: ^https?:\/\/([\w-]+\.)?pixiv\.net(\/|$) */
  pixiv: string | null;
  /** Pattern: ^https?:\/\/([\w-]+\.)?melonbooks\.co\.jp(\/|$) */
  melonBook: string | null;
  /** Pattern: ^https?:\/\/([\w-]+\.)?fanbox\.cc(\/|$) */
  fanBox: string | null;
  /** Pattern: ^https?:\/\/([\w-]+\.)?booth\.pm(\/|$) */
  booth: string | null;
  /** Pattern: ^https?:\/\/([\w-]+\.)?nicovideo\.jp(\/|$) */
  nicoVideo: string | null;
  /** Pattern: ^https?:\/\/([\w-]+\.)?skeb\.jp(\/|$) */
  skeb: string | null;
  /** Pattern: ^https?:\/\/([\w-]+\.)?fantia\.jp(\/|$) */
  fantia: string | null;
  /** Pattern: ^https?:\/\/([\w-]+\.)?tumblr\.com(\/|$) */
  tumblr: string | null;
  /** Pattern: ^https?:\/\/www\.youtube\.com(\/|$) */
  youtube: string | null;
  /** Pattern: ^https?:\/\/([\w-]+\.)?weibo\.(cn|com)(\/|$) */
  weibo: string | null;
  /** Pattern: ^https?:\/\/([\w-]+\.)?naver\.com(\/|$) */
  naver: string | null;
  /** Pattern: ^https?:\/\/ */
  website: string | null;
  /** ```console
   * Minimum: 1
   * ``` */
  version: number;
  createdAt: string;
  updatedAt: string;
};

export type CoverAttributes = {
  volume: string | null;
  fileName: string;
  description: string | null;
  locale: string | null;
  /** ```console
   * Minimum: 1
   * ``` */
  version: number;
  createdAt: string;
  updatedAt: string;
};

export type ExtendManga = Manga & {
  cover_art?: Partial<Cover> & Pick<Cover, "id" | "type">;
  author?: Partial<Author> & Pick<Author, "id" | "type">;
  artist?: Partial<Author> & Pick<Author, "id" | "type">;
};

export type ScanlationGroup = {
  /** UUID formatted string */
  id: string;
  type: "scanlation_group";
  attributes: ScanlationGroupAttributes;
  relationships: Relationship[];
};

export type ScanlationGroupAttributes = {
  /** Tên nhóm dịch */
  name: string;
  /** Danh sách tên thay thế theo từng ngôn ngữ */
  altNames: LocalizedString[];
  /** Trang web chính thức của nhóm */
  website: string | null;
  /** Máy chủ IRC của nhóm (nếu có) */
  ircServer: string | null;
  /** Kênh IRC của nhóm (nếu có) */
  ircChannel: string | null;
  /** Đường dẫn Discord của nhóm (nếu có) */
  discord: string | null;
  /** Email liên hệ của nhóm */
  contactEmail: string | null;
  /** Mô tả về nhóm dịch */
  description: string | null;
  /** Đường dẫn Twitter của nhóm */
  twitter: string | null;
  /**
   * Đường dẫn MangaUpdates của nhóm
   * Mẫu hợp lệ: https://www.mangaupdates.com/group hoặc publisher
   */
  mangaUpdates: string | null;
  /** Danh sách ngôn ngữ nhóm dịch tập trung vào */
  focusedLanguages: string[] | null;
  /** Trạng thái khóa của nhóm (true nếu bị khóa) */
  locked: boolean;
  /** Nhóm dịch có phải là nhóm chính thức không */
  official: boolean;
  /** Nhóm dịch có còn hoạt động không */
  inactive: boolean;
  /**
   * Thời gian trễ khi xuất bản
   * Tuân theo chuẩn ISO 8601: https://en.wikipedia.org/wiki/ISO_8601#Durations
   */
  publishDelay: string;
  /** Phiên bản dữ liệu (giá trị tối thiểu là 1) */
  version: number;
  /** Ngày tạo nhóm */
  createdAt: string;
  /** Ngày cập nhật nhóm */
  updatedAt: string;
};

export type StatisticsDetailsComments = {
  threadId: number;
  repliesCount: number;
};

export type Statistics = {
  comments: StatisticsDetailsComments;
  rating: {
    average: number;
    bayesian: number;
  };
  follows: number;
};

export type User = {
  /** Chuỗi định dạng UUID */
  id: string;
  type: "user";
  attributes: UserAttributes;
  relationships: Relationship[];
};
export type UserAttributes = {
  username: string;
  roles: string[];
  /** ```console
   * Tối thiểu: 1
   * ``` */
  version: number;
};
