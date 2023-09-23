import { Button, Input } from "@material-tailwind/react";
import logo from "../../assets/logo.png"

function Login() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="h-4/5 w-3/4 bg-[#2C2C2C] rounded-3xl flex">
        <div className="w-full lg:w-1/2 bg-[#EAEAEA] flex justify-center items-center rounded-3xl">
            <div className="w-full md:px-32 lg:px-24">
              <div className="h-52 items-center justify-center flex">
                <img src={logo} className="w-44 h-44"/>
              </div>
              <form className="w-full rounded-lg p-1 text-center">
                <div className=" flex flex-col justify-center gap-7">
                  <Input crossOrigin={undefined} type="text" variant="outlined" label="Email" color="orange" size="lg"/>
                  <Input crossOrigin={undefined} type="password" variant="outlined" label="Senha" color="orange" size="lg"/>
                  <div className="text-end -mt-6">
                    <p className="text-[#ED9121] hover:cursor-pointer text-sm">Esqueci a minha senha</p>
                  </div>
                  <Button className="bg-[#ED9121] font-bold text-sm" size="md">ENTRAR</Button>

                  <p>Não tem conta? <h1 className="text-[#ED9121] hover:cursor-pointer">Registre-se</h1></p>
                    
                </div>
              </form>
            </div>
          </div>
          <div
            className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center"
          >
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6 text-center">
              <p className="text-white text-2xl font-semibold">Bem-vindo ao</p>
              <h1 className="text-[#ED9121] font-bold text-5xl font-sans">
                Tangerine Ticket
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
