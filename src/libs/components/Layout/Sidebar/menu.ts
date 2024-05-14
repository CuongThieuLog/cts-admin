export type MenuType = {
  title: string
  icon: string
  active_icon: string
  href: string
  disabled?: boolean
  subHref?: string
}

export const menus: MenuType[] = [
  {
    href: '/',
    title: 'Trang chủ',
    icon: '/assets/imgs/home.png',
    active_icon: '/assets/imgs/home.png',
  },
  {
    href: '/project',
    title: 'Công trình',
    icon: '/assets/imgs/construct.png',
    active_icon: '/assets/imgs/construct.png',
  },
  {
    href: '/user',
    title: 'Nhân công',
    icon: '/assets/imgs/labour.png',
    active_icon: '/assets/imgs/labour.png',
  },
  {
    href: '/material',
    title: 'Vật tư',
    icon: '/assets/imgs/material.png',
    active_icon: '/assets/imgs/material.png',
  },
  {
    href: '/equipment',
    title: 'Thiết bị',
    icon: '/assets/imgs/equipment.png',
    active_icon: '/assets/imgs/equipment.png',
  },
  {
    href: '/report',
    title: 'Báo cáo',
    icon: '/assets/imgs/report.png',
    active_icon: '/assets/imgs/report.png',
  },
  {
    href: '/cost',
    title: 'Chi phí',
    icon: '/assets/svgs/cost.svg',
    active_icon: '/assets/svgs/cost.svg',
  },
]
