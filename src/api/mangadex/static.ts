// các enum cho pramas api

/** Enum cho trạng thái đọc manga */
export enum MangaReadingStatus {
  READING = "reading", // Đang đọc
  ON_HOLD = "on_hold", // Tạm ngưng
  PLAN_TO_READ = "plan_to_read", // Dự định đọc
  DROPPED = "dropped", // Bỏ dở
  RE_READING = "re_reading", // Đọc lại
  COMPLETED = "completed", // Đã hoàn thành
}

/** Enum cho đánh giá nội dung manga */
export enum MangaContentRating {
  SAFE = "safe", // An toàn
  SUGGESTIVE = "suggestive", // Gợi ý nội dung nhạy cảm
  EROTICA = "erotica", // Nội dung người lớn
  PORNOGRAPHIC = "pornographic", // Khiêu dâm
}

/** Enum cho đối tượng độc giả của manga */
export enum MangaPublicationDemographic {
  NONE = "none", // Không xác định
  SHOUNEN = "shounen", // Nam thanh thiếu niên
  SHOUJO = "shoujo", // Nữ thanh thiếu niên
  JOSEI = "josei", // Phụ nữ trưởng thành
  SEINEN = "seinen", // Nam giới trưởng thành
}

/** Enum cho trạng thái phát hành manga */
export enum MangaPublicationStatus {
  COMPLETED = "completed", // Đã hoàn thành
  ONGOING = "ongoing", // Đang phát hành
  CANCELLED = "cancelled", // Đã hủy bỏ
  HIATUS = "hiatus", // Gián đoạn
}

/** Enum cho trạng thái manga trên Mangadex */
export enum MangadexMangaState {
  DRAFT = "draft", // Bản nháp
  SUBMITTED = "submitted", // Đã gửi
  PUBLISHED = "published", // Đã xuất bản
  REJECTED = "rejected", // Bị từ chối
}

/** Enum cho loại liên kết giữa các manga */
export enum RelatedMangaType {
  MONOCHROME = "monochrome", // Phiên bản đơn sắc
  MAIN_STORY = "main_story", // Cốt truyện chính
  ADAPTED_FROM = "adapted_from", // Chuyển thể từ
  BASED_ON = "based_on", // Dựa trên
  PREQUEL = "prequel", // Tiền truyện
  SIDE_STORY = "side_story", // Ngoại truyện
  DOUJINSHI = "doujinshi", // Doujinshi (truyện do fan sáng tác)
  SAME_FRANCHISE = "same_franchise", // Cùng thương hiệu
  SHARED_UNIVERSE = "shared_universe", // Cùng vũ trụ
  SEQUEL = "sequel", // Hậu truyện
  SPIN_OFF = "spin_off", // Truyện phái sinh
  ALTERNATE_STORY = "alternate_story", // Câu chuyện thay thế
  ALTERNATE_VERSION = "alternate_version", // Phiên bản thay thế
  PRESERIALIZATION = "preserialization", // Trước khi xuất bản chính thức
  COLORED = "colored", // Phiên bản có màu
  SERIALIZATION = "serialization", // Xuất bản định kỳ
}

/** Enum cho thứ tự sắp xếp kết quả */
export enum Order {
  ASC = "asc", // Tăng dần
  DESC = "desc", // Giảm dần
}

/** Enum xác định loại thông tin quan hệ cần bao gồm trong tìm kiếm */
export enum Includes {
  MANGA = "manga", // Manga
  CHAPTER = "chapter", // Chương truyện
  COVER_ART = "cover_art", // Ảnh bìa
  AUTHOR = "author", // Tác giả
  ARTIST = "artist", // Họa sĩ
  SCANLATION_GROUP = "scanlation_group", // Nhóm dịch
  TAG = "tag", // Thẻ nội dung
  USER = "user", // Người dùng
  CUSTOM_LIST = "custom_list", // Danh sách tùy chỉnh
  LEADER = "leader", // Trưởng nhóm
  MEMBER = "member", // Thành viên
}

/** Enum đặt đối tượng cho GetSearchMangaRequestOptions */
export type GetSearchMangaOrder = {
  title?: Order;
  year?: Order;
  createdAt?: Order;
  updatedAt?: Order;
  latestUploadedChapter?: Order;
  followedCount?: Order;
  relevance?: Order;
  rating?: Order;
};

/** Đối tượng  cho Get MangaIdFeedRequestOptions */
export type GetMangaIdFeedOrder = {
  createdAt?: Order;
  updatedAt?: Order;
  publishAt?: Order;
  readableAt?: Order;
  volume?: Order;
  chapter?: Order;
};
