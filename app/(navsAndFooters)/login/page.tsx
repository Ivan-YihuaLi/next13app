import LoginForm from '@/components/Forms/LoginForm';

export default function Login() {
  return (
    <>
      <div
        className={
          'flex flex-col h-[calc(100vh-48px)] text-white justify-items-center'
        }
      >
        <h1 className={'text-center'}>Login to NeighborGood</h1>
        <LoginForm />
      </div>
    </>
  );
}
