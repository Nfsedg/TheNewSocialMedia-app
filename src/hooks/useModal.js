import { useRef, useEffect } from 'react';

const useModal = (setShowmenu, showmenu) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenuPost = (e) => {
      if (menuRef.current !== null && !e.path.includes(menuRef.current) && showmenu === true) {
        setShowmenu(false);
      }
    };

    document.body.addEventListener('click', closeMenuPost);

    return () => document.body.removeEventListener('click', closeMenuPost);
  }, [showmenu]);

  return {
    menuRef,
  };
};

export default useModal;
