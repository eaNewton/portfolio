import homeIcon from '../assets/img/home.svg'
import contactIcon from '../assets/img/contact.svg'

export const HOME = '/'
export const CONTACT = '/contact'

export const routeCodes = {
  HOME,
  CONTACT,
}

const menuItemFactory = (route) => {
  const map = {
    [HOME]: {
      itemUrl: HOME,
      itemImgSrc: homeIcon,
      itemClass: 'homeIcon',
      itemTitle: 'Home',
    },
    [CONTACT]: {
      itemUrl: CONTACT,
      itemImgSrc: contactIcon,
      itemClass: 'contactIcon',
      itemTitle: 'Contact',
    },
  }

  console.log(map[route])

  return map[route]
}

function getMenuRoutes() {
  return [].concat(HOME, CONTACT).map(menuItemFactory)
}

export const menuRoutes = getMenuRoutes()
