import { MenuProps } from 'antd'
import AppBarMenuItem from '../components/Footer/AppBarMenuItem'
import { ReactComponent as HomeIcon } from '../assets/images/icons/home.svg'
import { ReactComponent as DishesIcon } from '../assets/images/icons/dishes.svg'
import { ReactComponent as CommunityIcon } from '../assets/images/icons/community.svg'
import { ReactComponent as RecordIcon } from '../assets/images/icons/record.svg'
import { ReactComponent as MeIcon } from '../assets/images/icons/me.svg'

const appBarPages: MenuProps['items'] = [
  {
    label: <AppBarMenuItem label='菜品' route='dishes' svg={DishesIcon} />,
    key: 'dishes'
  },
  {
    label: (
      <AppBarMenuItem label='社区' route='community' svg={CommunityIcon} />
    ),
    key: 'community'
  },
  {
    label: <AppBarMenuItem label='首页' route='home' svg={HomeIcon} />,
    key: 'home'
  },
  {
    label: <AppBarMenuItem label='打卡' route='record' svg={RecordIcon} />,
    key: 'record'
  },
  { label: <AppBarMenuItem label='个人' route='me' svg={MeIcon} />, key: 'me' }
]

export default appBarPages
