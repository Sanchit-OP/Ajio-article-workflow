export default function Catalog() {
    return (
      <div className="h-full w-1/3 m-32 mx-[30%]">
        <form id="loginForm" className="rounded border p-10 w-full box-border flex flex-col items-center">
          <label for="username" className="block w-full mb-5">Username:</label>
          <input type="text" id="username" name="username" className="block border w-full mb-5" required />
  
          <label for="password" className="block w-full mb-5">Password:</label>
          <input type="password" id="password" name="password" className="block w-full border mb-5" required />
  
          <input type="submit" value="Login" className="w-auto px-5 py-1 cursor-pointer border bg-green-600 text-white rounded-sm mb-0 self-center" />
        </form>
      </div>
    );
  }
  