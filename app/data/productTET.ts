export interface ProductTET {
  id: string;
  name: string;
  price: string;
  slug: string;
  image: string;
  groupSlug: string;    
  categorySlug: string; 
  categoryName: string;
  originalPrice?: string;
  isCombo?: boolean;
  description?: string[];
}

export const productsTET: ProductTET[] = [
  {
    id: "tet-01",
    name: "SET TINH HOA",
    price: "1.150.000",
    originalPrice: "1.350.000",
    slug: "set-tinh-hoa",
    image: "/Picture/anhtet/tinhhoa.jpg",
    groupSlug: "TET",
    categorySlug: "tet-2026",
    categoryName: "Tết 2026",
    isCombo: true,
    description: [
      "1 Hộp Kẹo Nougat Strawberry",
      "1 Hộp Trà Thảo mộc mix vị",
      "1 Hộp Bánh Tuiles Almond Hạt bí Mè",
      "1 Hộp Bánh dinh dưỡng vị dừa"
    ]
  },
  {
    id: "tet-02",
    name: "SET CÁT TƯỜNG 1",
    price: "739.000",
    slug: "set-cat-tuong-1",
    image: "/Picture/anhtet/setcattuong1.jpg",
    groupSlug: "TET",
    categorySlug: "tet-2026",
    categoryName: "Tết 2026",
    isCombo: true,
    description: [
      "1 Hộp Kẹo Nougat Mix vị",
      "1 Hộp Trà Thảo mộc mix vị",
      "1 Hộp Bánh Tuiles Hạt bí",
      "1 Hộp Bánh dinh dưỡng Mix vị"
    ]
  },
  {
    id: "tet-03",
    name: "SET XUÂN AN",
    price: "520.000",
    originalPrice: "650.000",
    slug: "set-xuan-an",
    image: "/Picture/anhtet/xuanan.jpg",
    groupSlug: "TET",
    categorySlug: "tet-2026",
    categoryName: "Tết 2026",
    isCombo: true,
    description: [
      "1 Hộp Kẹo Nougat Dâu",
      "1 Hộp Trà Thảo mộc Mix vị",
      "1 Hộp Bánh Tuiles Hạnh nhân",
      "1 Hộp Bánh dinh dưỡng vị Dừa"
    ]
  },
  {
    id: "tet-04",
    name: "SET PHÚ QUÝ",
    price: "850.000",
    slug: "set-phu-quy",
    image: "/Picture/anhtet/phuquy.jpg",
    groupSlug: "TET",
    categorySlug: "tet-2026",
    categoryName: "Tết 2026",
    isCombo: true,
    description: [
      "1 Hộp Kẹo Nougat Strawberry",
      "1 Hộp Trà Thảo mộc mix vị",
      "1 Hộp Bánh Tuiles Almond Hạt bí",
      "1 Hộp Bánh dinh dưỡng vị dừa"
    ]
  },
  {
    id: "tet-05",
    name: "SET THỊNH PHÁT 2",
    price: "620.000",
    slug: "set-thinh-phat-2",
    image: "/Picture/anhtet/thinhphat2.jpg",
    groupSlug: "TET",
    categorySlug: "tet-2026",
    categoryName: "Tết 2026",
    isCombo: true,
    description: [
      "1 Hộp Kẹo Nougat Mix vị",
      "1 Hộp Trà Thảo mộc Mix vị",
      "1 Hộp Bánh Tuiles Hạnh nhân",
      "1 Hộp Bánh dinh dưỡng vị Dừa"
    ]
  },
  {
    id: "tet-06",
    name: "SET HẠNH PHÚC",
    price: "850.000",
    slug: "set-hanh-phuc",
    image: "/Picture/anhtet/hanhphuc.jpg",
    groupSlug: "TET",
    categorySlug: "tet-2026",
    categoryName: "Tết 2026",
    isCombo: true,
    description: [
      "1 Hộp Kẹo Nougat Dâu",
      "1 Hộp Trà Thảo mộc Mix vị",
      "1 Hộp Bánh Tuiles Hạnh nhân",
      "1 Hộp Bánh dinh dưỡng vị Dừa"
    ]
  },
  {
    id: "tet-07",
    name: "SET PHÚC LỘC",
    price: "500.000",
    originalPrice: "650.000",
    slug: "set-phuc-loc",
    image: "/Picture/anhtet/phucloc.jpg",
    groupSlug: "TET",
    categorySlug: "tet-2026",
    categoryName: "Tết 2026",
    isCombo: true,
    description: [
      "1 Hộp Kẹo Nougat Strawberry",
      "1 Hộp Trà Thảo mộc Mix vị",
      "1 Hộp Bánh Tuiles Hạnh nhân",
      "1 Hộp Bánh dinh dưỡng vị Dừa"
    ]
  },
  {
    id: "tet-08",
    name: "SET AN KHANG 1",
    price: "1.575.000",
    originalPrice: "1.650.000",
    slug: "set-an-khang-1",
    image: "/Picture/anhtet/ankhang.jpg",
    groupSlug: "TET",
    categorySlug: "tet-2026",
    categoryName: "Tết 2026",
    isCombo: true,
    description: [
      "1 Hộp Kẹo Nougat Mix vị",
      "1 Hộp Trà Thảo mộc Mix vị",
      "1 Hộp Bánh Tuiles Hạnh nhân",
      "1 Hộp Bánh dinh dưỡng vị Dừa"
    ]
  },
  {
    id: "tet-09",
    name: "SET THỊNH VƯỢNG 2",
    price: "1.380.000",
    slug: "set-thinh-vuong-2",
    image: "/Picture/anhtet/thinhvuong2.jpg",
    groupSlug: "TET",
    categorySlug: "tet-2026",
    categoryName: "Tết 2026",
    isCombo: true,
    description: [
      "1 Hộp Kẹo Nougat Strawberry",
      "1 Hộp Trà Thảo mộc Mix vị",
      "1 Hộp Bánh Tuiles Hạnh nhân",
      "1 Hộp Bánh dinh dưỡng vị Dừa"
    ]
  },
  {
    id: "tet-10",
    name: "SET AN KHANG 3",
    price: "2.490.000",
    slug: "set-an-khang-3",
    image: "/Picture/anhtet/ankhang3.jpg",
    groupSlug: "TET",
    categorySlug: "tet-2026",
    categoryName: "Tết 2026",
    isCombo: true,
    description: [
      "1 Hộp Kẹo Nougat Mix vị",
      "1 Hộp Trà Thảo mộc Mix vị",
      "1 Hộp Bánh Tuiles Hạnh nhân",
      "1 Hộp Bánh dinh dưỡng vị Dừa"
    ]
  },

  // ... tiếp tục cho tet-11 đến tet-24 tương tự

  // --- NHÓM 2: QUÀ SỨC KHỎE ---
  {
    id: "sk-01",
    name: "Set quà Tâm An",
    price: "1.080.000",
    originalPrice: "1.200.000",
    slug: "set-qua-tam-an",
    image: "/Picture/anhsk/sk1.jpg",
    groupSlug: "TET",
    categorySlug: "qua-suc-khoe",
    categoryName: "Quà Sức Khỏe",
    isCombo: true,
    description: [
      "1 Hộp Yến Sào cao cấp",
      "1 Hộp Đông Trùng Hạ Thảo",
      "1 Hộp Trà Thảo Mộc",
      "1 Hộp Bánh Dinh Dưỡng"
    ]
  },

  // ... tiếp sk-02 đến sk-04

  // --- NHÓM 3: SET QUÀ OCOP ---
  {
    id: "oc-01",
    name: "Set OCOP 1",
    price: "690.000",
    slug: "set-ocop-1",
    image: "/Picture/anhsetquaocop/ocop2.jpg",
    groupSlug: "TET",
    categorySlug: "set-qua-ocop",
    categoryName: "Set Quà OCOP",
    isCombo: true,
    description: [
      "1 Hộp Mứt Hoa Quả",
      "1 Hộp Trà Thảo Mộc",
      "1 Hộp Kẹo Socola"
    ]
  },
  {
    id: "oc-02",
    name: "Set OCOP 2",
    price: "1.020.000",
    slug: "set-ocop-2",
    image: "/Picture/anhsetquaocop/ocop1.jpg",
    groupSlug: "TET",
    categorySlug: "set-qua-ocop",
    categoryName: "Set Quà OCOP",
    isCombo: true,
    description: [
      "1 Hộp Kẹo Nougat",
      "1 Hộp Trà Thảo Mộc",
      "1 Hộp Bánh Tuiles"
    ]
  }
];