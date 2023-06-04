const EducationSection = () => {
  return (
    <>
      <div className="xl:mt-32">
        <div>
          <h1 className="text-center my-10 text-2xl font-JakartaSans font-semibold">Pendidikan & Pengalaman</h1>
          <div className="mx-16">
            <ol class="relative border-l border-gray-200 dark:border-gray-700 flex flex-col-reverse">
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 - 2021</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">SMKS Bina Insani Tangerang</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Bersekolah di SMK BIna Insani dengan jurusan Administrasi Perkantoran</p>
              </li>
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Agustus 2019 - April 2020</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Freelance Waitress & kasir di Restoran 8Spices Tangerang</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Menjalankan excelent service, melayani transaksi dengan costumer, serta melaksanakan SOP restauran.</p>
                {/* <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{" "}
                  <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </a> */}
              </li>
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Juli 2021 - Januari 2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Staff Admin di CV. Jagoan Kuliner, Tangerang</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Mengelola 2 cabang restoran & 1 central kitchen, dan juga melakukan pembelian bahan baku, serta pembukuan. Ikut serta juga dalam kegiatan Operasional Control, dan kerja sama dengan supplier.
                </p>
              </li>
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Februari 2022 - Desember 2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Finance & Assistant Head Office di CV. Jagoan Kuliner, Tangerang</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Membuat data dan laporan omset dari 6 cabang restoran, merekap data omset, pengeluaran & profit, memantau dan melakukan evaluasi perusahaan.</p>
              </li>
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Januari 2023 - may 2023</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Asisstant HO & Junior Bussines Development di CV. Jagoan Kuliner, Tangerang</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Melakukan pengawasan operasional perusahaan dan brand, serta membuat dan menjalankan projek terbaru.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationSection;
