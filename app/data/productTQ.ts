import { title } from "process";

export const getGroupData = (group: string) => {
  const key = group.toLowerCase();

  const data: any = {
    tet: {
      title: "Quà Tết 2026",
      parentName: "Tết",
      navTabs: [
        {
          name: "Tết 2026",
          path: `/products/TET/tet-2026`,
        },
        {
          name: "Quà sức khỏe",
          path: `/products/TET/qua-suc-khoe`,
        },
        {
          name: "OCOP",
          path: `/products/TET/set-qua-ocop`,
        },
      ],
    },

    dtht: {
      title: "Đông Trùng Hạ Thảo",
      parentName: "ĐTHT",
      navTabs: [
        {
          name: " Đông Trùng Tươi",
          path: `/products/DTHT/dong-trung-tuoi`,
        },
        {
          name: " Đông Trùng Khô",
          path: `/products/DTHT/dong-trung-kho`,
        },
        {
          name: "Đông Trùng Mật ong",
          path: `/products/DTHT/dong-trung-mat-ong`,
        },
        {
          name: "Đông Trùng Bột",
          path: `/products/DTHT/dong-trung-bot`,
        },
      ],
    },

    trathaomoc: {
      title: "Trà thảo dược",
      parentName: "Trà thảo dược",
      navTabs: [{
        name: "Trà túi lọc",
        path:`/products/trathaomoc/tra-tui-loc`,
      },
        
      ],
    },
    yensao: {
      title: "Nước yến sào",
      parentName:"Nước yến sào",
      navTabs: [{
        name: "Quà tặng yến sào",
        path: `/products/yensao/qua-tang-yen-sao`,
      },
      {
        name: "Nước yến hũ",
        path: `/products/yensao/nuoc-yen-hu`,
      },

    ]
    },
    healthy: {
      title: "Đồ uống Healthy",
      parentName:"Đồ uống healthy",
      navTabs: [{
        name: "Nước đông trùng",
        path: `/products/healthy/nuoc-dong-trung`,
      },
      {
        name: "Mật ong thảo mộc",
        path: `/products/healthy/mat-ong-thao-moc`,
      },
    ],
    }
  };

  return data[key] || data["tet"];
};