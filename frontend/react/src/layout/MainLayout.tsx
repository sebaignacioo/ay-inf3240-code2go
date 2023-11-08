import { useState } from 'react';

import { Link, Outlet } from 'react-router-dom';

import Icon from '../components/Icon';

const MainLayout = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-slate-900/10">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-1 items-center gap-x-6">
                        <button type="button" onClick={() => setOpenNavbar(true)} className="-m-3 p-3 md:hidden">
                            <span className="sr-only">Abrir navbar</span>
                            <svg
                                className="h-5 w-5 text-slate-900"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <Icon className="h-8 w-auto" />
                    </div>
                    <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-slate-700">
                        <a href="#">Inicio</a>
                        <a href="#">Bloques</a>
                        <a href="#">Perfiles</a>
                    </nav>
                    <div className="flex flex-1 items-center justify-end gap-x-8">
                        <Link to="/auth/login" className="-m-1.5 p-1.5">
                            <span className="sr-only">Iniciar sesión</span>
                            <div className="h-8 py-2 px-4 m-2 text-white font-semibold text-xs rounded-lg bg-emerald-600 hover:bg-emerald-700">
                                Iniciar sesión
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={`${openNavbar ? '' : 'hidden '}lg:hidden`} role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-50"></div>
                    <div className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-slate-900/10">
                        <div className="-ml-0.5 flex h-16 items-center gap-x-6">
                            <button type="button" onClick={() => setOpenNavbar(false)} className="-m-2.5 p-2.5 text-slate-700">
                                <span className="sr-only">Cerrar menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div className="-ml-0.5">
                                <a href="#" className="-m-1.5 block p-1.5">
                                    <span className="sr-only">Code2Go</span>
                                    <Icon className="h-8 w-auto" />
                                </a>
                            </div>
                        </div>
                        <div className="mt-2 space-y-2">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50">
                                Inicio
                            </a>
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50">
                                Bloques
                            </a>
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50">
                                Perfiles
                            </a>
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-x-8">
                            <Link to="/auth/login" className="-m-1.5 p-1.5">
                                <span className="sr-only">Iniciar sesión</span>
                                <div className="h-8 py-2 px-4 m-2 text-white font-semibold text-xs rounded-lg bg-emerald-600 hover:bg-emerald-700">
                                    Iniciar sesión
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default MainLayout;
