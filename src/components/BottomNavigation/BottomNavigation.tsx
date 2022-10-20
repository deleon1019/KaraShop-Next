import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';
import { FiHome, FiUser, FiHeart, FiShoppingBag, FiGrid } from 'react-icons/fi';

interface BottomTab {
  title: string;
  url: string;
  Icon: IconType;
}

export const BottomNavigation = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const bottomTabs: BottomTab[] = [
    { title: t('home'), url: '/', Icon: FiHome },
    { title: t('collections'), url: '/collections', Icon: FiGrid },
    { title: t('cart'), url: '/cart', Icon: FiShoppingBag },
    { title: t('wishlist'), url: '/wishlist', Icon: FiHeart },
    { title: t('profile'), url: '/login', Icon: FiUser },
  ];

  return (
    <div className="bg-white h-16 fixed bottom-0 right-0 left-0 z-50 drop-shadow-[0_-15px_20px_rgba(0,0,0,0.10)] md:hidden">
      <ul className="flex h-full">
        {bottomTabs.map((tab, index) => (
          <li key={index} className="flex-1">
            <Link href={tab.url}>
              <a
                className={`flex flex-col text-xs text-neutral-700 hover:text-violet-700 font-medium justify-center items-center h-full w-full ${
                  router.pathname === tab.url && 'text-violet-700'
                }`}
              >
                <tab.Icon size={'1.2rem'} />
                <span className="mt-1">{tab.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
