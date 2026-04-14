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

export const healthyProducts: Product[] = [
  {
    id: "h-01",
    name: "Nước Đông Trùng Thạch Nha Đam",
    price: "25.000đ",
    image: "/Picture/nuocdongtrung1.jpg",
    slug: "nuoc-dong-trung-thach-nha-dam",
    groupSlug: "healthy",
    categorySlug: "nuoc-dong-trung",
    categoryName: "Nước Giải Khát",
    description: [
      "Nước Đông Trùng thạch nha đam tươi mát",
      "Bổ sung năng lượng và dưỡng chất cho cơ thể",
      "Thích hợp dùng giải khát hàng ngày"
    ]
  },
  {
    id: "h-02",
    name: "Mật Ong gừng chanh 200g",
    price: "135.000đ",
    image: "/Picture/matong.jpg",
    slug: "mat-ong-gung-chanh-200g",
    groupSlug: "healthy",
    categorySlug: "mat-ong-thao-moc",
    categoryName: "Mật Ong Thảo Mộc",
    description: [
      "Mật ong nguyên chất kết hợp gừng và chanh",
      "Giúp tăng sức đề kháng và thanh lọc cơ thể",
      "Dùng trực tiếp hoặc pha nước ấm uống hàng ngày"
    ]
  }
];