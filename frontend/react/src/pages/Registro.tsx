import { Link } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form"

import { authRegistro } from "../functions/auth";

type Inputs = {
    username: string
    email: string;
    password: string
}


const Registro = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        return await authRegistro(data);
    }
    return (
        <>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Crear una cuenta
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-slate-900">
                            Nombre de usuario
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                type="text"
                                autoComplete="username"
                                {...register("username", { required: "Este campo es requerido" })}
                                className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                            />
                            <span className={`${errors.username ? '' : 'invisible '}text-red-600 text-xs`}>{errors.username?.message}</span>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-slate-900">
                            Correo electrónico
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                type="text"
                                autoComplete="email"
                                {...register("email", {
                                    required: "Este campo es requerido", pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Debe ingresar un correo válido",
                                    },
                                })}
                                className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                            />
                            <span className={`${errors.email ? '' : 'invisible '}text-red-600 text-xs`}>{errors.email?.message}</span>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-slate-900">
                                Contraseña
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                {...register("password", { required: "Este campo es requerido" })}
                                className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                            />
                            <span className={`${errors.password ? '' : 'invisible '}text-red-600 text-xs`}>{errors.password?.message}</span>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-lg bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                            Crear una nueva cuenta
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-slate-500">
                    Ya tienes una cuenta?
                    <Link
                        to="/auth/login"
                        className="font-semibold leading-6 text-emerald-600 hover:text-emerald-500">
                        {' '}
                        Inicia sesión
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Registro;
