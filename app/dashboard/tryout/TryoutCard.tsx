"use client";

import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

const TryoutCard = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();

  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Belum dikerjakan
        </span>
        <a href="#">
          <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Tryout SKD #1
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Yey, try out gratis untuk kamu! 🎁
        </p>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline mr-5"
          onClick={() => setOpenModal("default")}
        >
          Kerjakan
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>

        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          Leaderboard
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>

        <Modal
          show={openModal === "default"}
          onClose={() => setOpenModal(undefined)}
        >
          <Modal.Header>Peraturan Try Out SKD #1</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Labore velit deserunt dolore in dolore officia sint proident
                consequat reprehenderit eiusmod commodo. Cillum ea anim commodo
                nisi nisi deserunt nisi duis aute ut eu. Ad dolore et magna enim
                anim nulla enim do id veniam. Qui reprehenderit ex ullamco non
                reprehenderit dolore adipisicing pariatur aute proident mollit
                tempor pariatur. Eu adipisicing eiusmod nulla esse laboris
                laboris ipsum ullamco commodo fugiat. Laborum ipsum irure
                commodo pariatur excepteur.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Non duis ipsum adipisicing veniam laborum enim nulla enim magna
                amet non ut ad. Qui ad est aliqua id. Do esse laboris velit
                labore fugiat aliquip incididunt excepteur sint occaecat dolor
                mollit. Culpa ut anim ea nulla sint. Ad ea qui labore et. Non
                sit irure incididunt ea laborum minim elit culpa nisi incididunt
                voluptate id nisi culpa.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(undefined)}>
              Mulai kerjakan
            </Button>
            <Button color="gray" onClick={() => setOpenModal(undefined)}>
              Batal
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default TryoutCard;
