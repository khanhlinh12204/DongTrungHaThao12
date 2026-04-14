export interface ProductTra {
  id: string;
  name: string;
  price: string;
  image: string;
  slug: string;
  groupSlug: string;
  categorySlug: string;
  categoryName: string;
  originalPrice?: string;
  isCombo?: boolean;
  description?: string[];
}

export const productTra: ProductTra[] = [
  {
    id: "1",
    name: "Trà Đông trùng Tô diệp thảo",
    price: "162.000đ",
    image: "/Picture/tra1.jpg",
    slug: "tra-dong-trung-to-diep-thao",
    groupSlug: "trathaomoc",
    categorySlug: "tra-tui-loc",
    categoryName: "Trà Túi Lọc",
    description: [
      "Trà túi lọc kết hợp Đông trùng Tô diệp thảo",
      "Bổ dưỡng, tăng cường sức khỏe, thanh lọc cơ thể",
      "Dễ dàng pha, tiện lợi sử dụng hàng ngày"
    ]
  },
  {
    id: "2",
    name: "Cẩm Lệ Chi Trà",
    price: "162.000đ",
    image: "/Picture/tra2.jpg",
    slug: "cam-le-chi-tra",
    groupSlug: "trathaomoc",
    categorySlug: "tra-tui-loc",
    categoryName: "Trà Túi Lọc",
    description: [
      "Trà túi lọc Cẩm Lệ Chi thanh mát, thơm nhẹ",
      "Hỗ trợ giải nhiệt, an thần, giảm stress",
      "Thích hợp dùng hàng ngày cho cơ thể cân bằng"
    ]
  },
  {
    id: "3",
    name: "Trà đông trùng Lạc hồng thảo",
    price: "162.000đ",
    image: "/Picture/tra3.jpg",
    slug: "tra-dong-trung-lac-hong-thao",
    groupSlug: "trathaomoc",
    categorySlug: "tra-tui-loc",
    categoryName: "Trà Túi Lọc",
    description: [
      "Trà túi lọc kết hợp Đông trùng Lạc hồng thảo",
      "Giúp tăng cường sức khỏe, bổ sung năng lượng",
      "Tiện lợi pha uống, giữ hương vị tự nhiên"
    ]
  },
  {
    id: "4",
    name: "Trà khổ qua rừng",
    price: "99.000đ",
    image: "/Picture/tra4.jpg",
    slug: "tra-kho-qua-rung",
    groupSlug: "trathaomoc",
    categorySlug: "tra-tui-loc",
    categoryName: "Trà Túi Lọc",
    description: [
      "Trà túi lọc Khổ qua rừng thanh mát, hỗ trợ giải độc",
      "Giúp điều hòa đường huyết và tiêu hóa tốt hơn",
      "Thích hợp dùng đều đặn hàng ngày"
    ]
  },
  {
    id: "5",
    name: "Trà Đông trùng Vị nguyên bản",
    price: "185.000đ",
    image: "/Picture/tra5.jpg",
    slug: "tra-dong-trung-vi-nguyen-ban",
    groupSlug: "trathaomoc",
    categorySlug: "tra-tui-loc",
    categoryName: "Trà Túi Lọc",
    description: [
      "Trà Đông trùng hảo hạng vị nguyên bản",
      "Giúp bồi bổ cơ thể, tăng cường sức khỏe toàn diện",
      "Tiện lợi pha uống hàng ngày, giữ hương vị thuần khiết"
    ]
  },
  {
    id: "6",
    name: "Trà tía tô",
    price: "99.000đ",
    image: "/Picture/tra6.jpg",
    slug: "tra-tia-to",
    groupSlug: "trathaomoc",
    categorySlug: "tra-tui-loc",
    categoryName: "Trà Túi Lọc",
    description: [
      "Trà túi lọc Tía tô thơm nhẹ, dễ uống",
      "Hỗ trợ thanh nhiệt, giải độc, tăng cường sức khỏe",
      "Thích hợp dùng hàng ngày, tốt cho cả gia đình"
    ]
  },
];