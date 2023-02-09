import { useEffect, useState } from "react";


export const closeModal = ({event, setIsOpen}) => {
  if (event.target.contains(event.currentTarget)) {
    setIsOpen(false)
  }
}

export const openModal = (setIsOpen) => {
  setIsOpen(true)
}

export  function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  return {isOpen, setIsOpen}
}
