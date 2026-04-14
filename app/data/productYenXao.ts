export interface ProductYenXao {
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

export const allYenXaoProducts: ProductYenXao[] = [
  {
    id: "yx-01",
    name: "Nước yến sào đông trùng hạ thảo",
    price: "45.000đ",
    image: "/Picture/yen1.jpg",
    slug: "nuoc-yen-sao-dong-trung-ha-thao",
    groupSlug: "yensao",
    categorySlug: "nuoc-yen-hu",
    categoryName: "Nước Yến Sào",
    description: [
      "Nước yến sào kết hợp đông trùng hạ thảo",
      "Giúp tăng cường sức khỏe, bổ khí huyết",
      "Dùng trực tiếp, tiện lợi, thanh mát cơ thể",
    ],
  },

  {
    id: "yx-02",
    name: "Yến đông trùng đẳng sâm - hũ 70ml",
    price: "68.000đ",
    image: "/Picture/yen2.jpg",
    slug: "yen-dong-trung-dang-sam-hu-70ml",
    groupSlug: "yensao",
    categorySlug: "nuoc-yen-hu",
    categoryName: "Nước Yến Sào",
    description: [
      "Hũ 70ml yến sào kết hợp đông trùng đẳng sâm",
      "Tăng cường sức đề kháng, bổ sung năng lượng",
      "Dùng trực tiếp, tiện lợi cho mọi lứa tuổi",
    ],
  },

  {
    id: "yx-03",
    name: "Yến Đông trùng đẳng sâm - hộp 6 hũ",
    price: "420.000đ",
    image: "/Picture/yen3.jpg",
    slug: "yen-dong-trung-dang-sam-hop-6-hu",
    groupSlug: "yensao",
    categorySlug: "qua-tang-yen-sao",
    categoryName: "Quà Tặng Yến Sào",
    isCombo: true,
    description: [
      "Hộp 6 hũ yến sào kết hợp đông trùng đẳng sâm",
      "Phù hợp làm quà tặng sức khỏe cao cấp",
      "Bổ sung năng lượng, tăng cường sức đề kháng",
    ],
  },

  {
    id: "yx-04",
    name: "Nước Yến Sào - Lốc 6 hũ mix 5 vị",
    price: "290.000đ",
    originalPrice: "293.000đ",
    image: "/Picture/yen4.jpg",
    slug: "nuoc-yen-sao-loc-6-hu-mix-5-vi",
    groupSlug: "yensao",
    categorySlug: "qua-tang-yen-sao",
    categoryName: "Quà Tặng Yến Sào",
    isCombo: true,
    description: [
      "Lốc 6 hũ nước yến sào mix 5 vị khác nhau",
      "Tiện lợi, thanh mát, bổ dưỡng cho cơ thể",
      "Phù hợp làm quà tặng hoặc dùng gia đình",
    ],
  },

  {
    id: "yx-05",
    name: "Nước yến sào gừng và hạt chia",
    price: "45.000đ",
    image: "/Picture/yen5.jpg",
    slug: "nuoc-yen-sao-gung-va-hat-chia",
    groupSlug: "yensao",
    categorySlug: "nuoc-yen-hu",
    categoryName: "Nước Yến Sào",
    description: [
      "Nước yến sào kết hợp gừng và hạt chia",
      "Tăng cường sức khỏe, hỗ trợ tiêu hóa",
      "Dùng trực tiếp, giúp cơ thể khỏe mạnh, dẻo dai",
    ],
  },

  {
    id: "yx-06",
    name: "Nước yến sào ăn kiêng",
    price: "45.000đ",
    image: "/Picture/yen6.jpg",
    slug: "nuoc-yen-sao-an-kieng",
    groupSlug: "yensao",
    categorySlug: "nuoc-yen-hu",
    categoryName: "Nước Yến Sào",
    description: [
      "Nước yến sào dành cho người ăn kiêng, ít đường",
      "Giúp bổ sung năng lượng mà không lo tăng cân",
      "Thích hợp dùng hàng ngày để duy trì sức khỏe",
    ],
  },

  {
    id: "yx-07",
    name: "Nước yến sào long nhãn",
    price: "45.000đ",
    image: "/Picture/yen7.jpg",
    slug: "nuoc-yen-sao-long-nhan",
    groupSlug: "yensao",
    categorySlug: "nuoc-yen-hu",
    categoryName: "Nước Yến Sào",
    description: [
      "Nước yến sào kết hợp long nhãn thơm ngon",
      "Bổ dưỡng, giúp an thần và ngủ ngon",
      "Dùng trực tiếp, tiện lợi, tốt cho sức khỏe",
    ],
  },
];