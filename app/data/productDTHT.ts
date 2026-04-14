export interface Product {
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

export const productsDTHT: Product[] = [
  {
    id: "1",
    name: "Mật ong Sợi ĐTHT 320ml",
    price: "450.000đ",
    image: "/Picture/dongtrung1.jpg",
    slug: "mat-ong-soi-dtht-320ml",
    groupSlug: "DTHT",
    categorySlug: "dong-trung-mat-ong",
    categoryName: "Đông trùng mật ong",
    description: [
      "320ml mật ong nguyên chất kết hợp sợi đông trùng tươi",
      "Giúp tăng cường sức khỏe, bồi bổ cơ thể",
      "Thích hợp dùng trực tiếp hoặc pha nước ấm uống hàng ngày"
    ]
  },
  {
    id: "2",
    name: "ĐTHT Sinh khối tươi - Hộp vuông",
    price: "210.000đ",
    image: "/Picture/dongtrung2.jpg",
    slug: "dtht-sinh-khoi-tuoi-hop-vuong",
    groupSlug: "DTHT",
    categorySlug: "dong-trung-tuoi",
    categoryName: "Đông trùng tươi",
    description: [
      "Hộp vuông chứa sinh khối đông trùng tươi nguyên chất",
      "Bảo quản lạnh, giữ nguyên dưỡng chất",
      "Dùng trực tiếp hoặc chế biến món ăn bổ dưỡng"
    ]
  },
  {
    id: "3",
    name: "ĐTHT Sấy thăng hoa Loại Đặc biệt 30g",
    price: "900.000đ",
    image: "/Picture/dongtrung3.jpg",
    slug: "dtht-say-thang-hoa-dac-biet-30g",
    groupSlug: "DTHT",
    categorySlug: "dong-trung-kho",
    categoryName: "Đông trùng khô",
    description: [
      "30g đông trùng sấy thăng hoa loại đặc biệt",
      "Dưỡng chất cao, dùng pha nước, nấu cháo hoặc hầm gà",
      "Bảo quản nơi khô ráo, tránh ánh sáng trực tiếp"
    ]
  },
  {
    id: "4",
    name: "Mật ong bột ĐTHT 100ml",
    price: "195.000đ",
    image: "/Picture/dongtrung4.jpg",
    slug: "mat-ong-bot-dtht-100ml",
    groupSlug: "DTHT",
    categorySlug: "dong-trung-mat-ong",
    categoryName: "Đông trùng mật ong",
    description: [
      "100ml mật ong bột ĐTHT tinh khiết",
      "Dễ sử dụng, pha nước hoặc chế biến món ăn",
      "Giúp bổ sung năng lượng và tăng sức đề kháng"
    ]
  },
  {
    id: "5",
    name: "ĐTHT Sấy thăng hoa Loại Đặc biệt 15g",
    price: "490.000đ",
    image: "/Picture/dongtrung5.jpg",
    slug: "dtht-say-thang-hoa-dac-biet-15g",
    groupSlug: "DTHT",
    categorySlug: "dong-trung-kho",
    categoryName: "Đông trùng khô",
    description: [
      "15g đông trùng sấy thăng hoa loại đặc biệt",
      "Giữ nguyên hương vị và dưỡng chất cao",
      "Dùng pha trà, nấu cháo, hầm gà bổ dưỡng"
    ]
  },
  {
    id: "6",
    name: "Bột ĐTHT nguyên chất 15g",
    price: "162.000đ",
    image: "/Picture/dongtrung6.jpg",
    slug: "bot-dtht-nguyen-chat-15g",
    groupSlug: "DTHT",
    categorySlug: "dong-trung-bot",
    categoryName: "Đông trùng bột",
    description: [
      "15g bột đông trùng nguyên chất",
      "Dễ hòa tan, pha nước uống hoặc nấu ăn",
      "Giúp bổ sung dưỡng chất hàng ngày"
    ]
  },
  {
    id: "7",
    name: "ĐTHT Sấy thăng hoa Loại Cao cấp 15g",
    price: "756.000đ",
    image: "/Picture/dongtrung7.jpg",
    slug: "dtht-say-thang-hoa-cao-cap-15g",
    groupSlug: "DTHT",
    categorySlug: "dong-trung-kho",
    categoryName: "Đông trùng khô",
    description: [
      "15g đông trùng sấy thăng hoa cao cấp",
      "Dưỡng chất tối ưu, dùng pha nước, nấu cháo, hầm gà",
      "Bảo quản nơi khô ráo, tránh ánh sáng"
    ]
  },
  {
    id: "8",
    name: "Đế ĐTHT Sấy khô 500g",
    price: "189.000đ",
    image: "/Picture/dongtrung8.jpg",
    slug: "de-dtht-say-kho-500g",
    groupSlug: "DTHT",
    categorySlug: "dong-trung-de",
    categoryName: "Đông trùng đế",
    description: [
      "500g đế đông trùng sấy khô",
      "Nguyên liệu chế biến các món bổ dưỡng",
      "Bảo quản nơi khô ráo, thoáng mát"
    ]
  },
  {
    id: "9",
    name: "ĐTHT Sấy thăng hoa Loại Tiêu chuẩn 12g",
    price: "378.000đ",
    image: "/Picture/dongtrung9.jpg",
    slug: "dtht-say-thang-hoa-tieu-chuan-12g",
    groupSlug: "DTHT",
    categorySlug: "dong-trung-kho",
    categoryName: "Đông trùng khô",
    description: [
      "12g đông trùng sấy thăng hoa tiêu chuẩn",
      "Dùng pha trà hoặc chế biến món ăn bổ dưỡng",
      "Bảo quản nơi khô ráo, tránh ánh sáng trực tiếp"
    ]
  },
  {
    id: "10",
    name: "ĐTHT Sợi tươi Loại Cao cấp 50g",
    price: "420.000đ",
    image: "/Picture/dongtrung10.jpg",
    slug: "dtht-soi-tuoi-cao-cap-50g",
    groupSlug: "DTHT",
    categorySlug: "dong-trung-tuoi",
    categoryName: "Đông trùng tươi",
    description: [
      "50g sợi đông trùng tươi loại cao cấp",
      "Dùng trực tiếp hoặc chế biến món ăn bổ dưỡng",
      "Bảo quản lạnh để giữ nguyên dưỡng chất"
    ]
  }
];