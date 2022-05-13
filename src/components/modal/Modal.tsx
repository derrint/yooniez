import { ReactNode, Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { IoCloseCircleOutline } from 'react-icons/io5';

import { useActions, useState } from '@overmind/index';

type ICloseButtonProps = {
  hidden?: boolean;
  color?: string;
};

type IModalProps = {
  children: ReactNode;
  name: string;
  closeButton?: ICloseButtonProps;
};

const Modal = (props: IModalProps) => {
  const { modal } = useState();
  const { hideModal } = useActions();

  return (
    <Transition
      appear
      show={modal.isVisible && modal.name === props.name}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={hideModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block overflow-hidden text-center align-middle transition-all transform">
              <button
                className="absolute top-3 right-3 z-20"
                onClick={() => {
                  hideModal();
                }}
              >
                <IoCloseCircleOutline
                  size={32}
                  color={props?.closeButton?.color || '#919199'}
                />
              </button>
              {props.children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export { Modal };
