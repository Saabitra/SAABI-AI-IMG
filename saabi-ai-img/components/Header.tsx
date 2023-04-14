import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      {/* LEFT DIV */}
      <div className="flex space-x-2 items-center">
        <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE2MCIgaGVpZ2h0PSIyMTYwIiB2aWV3Qm94PSIwIDAgMjE2MCAyMTYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTg4OCA2NDBWNjAyLjI3TDE4NTUuMjQgNTgzLjU1N0wxMTEzLjc0IDE2MC4wNTdMMTA4MS41IDE0MS42NDVMMTA0OS4yNiAxNjAuMDU3TDMwNy43NjMgNTgzLjU1N0wyNzUgNjAyLjI3VjY0MFYxNTA5VjE1NDYuNTNMMzA3LjUwNiAxNTY1LjNMMTA0OS4wMSAxOTkzLjNMMTA4MS41IDIwMTIuMDVMMTExMy45OSAxOTkzLjNMMTg1NS40OSAxNTY1LjNMMTg4OCAxNTQ2LjUzVjE1MDlWNjQwWiIgc3Ryb2tlPSJ1cmwoI3BhaW50MF9yYWRpYWxfM18yKSIgc3Ryb2tlLXdpZHRoPSIxMzAiLz4KPHBhdGggZD0iTTQ3MCA3MjEuMjkyTDEwMTAuNSA0MTUuMzU4Vjk1OC4xNzZMODY3LjUgODgzLjY5N1Y2NjEuNVY2NjAuNjY1TDg2Ni43NjQgNjYxLjA1OUw2MDMuNzY0IDgwMi4wNTlMNjAzLjUgODAyLjIwMVY4MDIuNVY4ODRWODg0LjI4N0w2MDMuNzQ4IDg4NC40MzJMMTAxMC41IDExMjIuMjlWMTc0Ny42NEw0NzAgMTQzOC4yMVYxMTIyLjgzTDYwMy41IDExOTQuM1YxMzYzVjEzNjMuMjlMNjAzLjc1NSAxMzYzLjQ0TDg2Ni43NTUgMTUxMC45NEw4NjcuNSAxNTExLjM1VjE1MTAuNVYxMTk0VjExOTMuNzFMODY3LjI1NCAxMTkzLjU3TDQ3MCA5NTguNzE1VjcyMS4yOTJaTTE0OTkgMTA5NFYxMDk0LjNMMTQ5OS4yNyAxMDk0LjQ0TDE2ODcgMTE5NC4zVjE0MzguMjFMMTE0OS41IDE3NDcuNjRWNDE1LjM2TDE2ODcgNzIxLjI5MVY5NTguNzE3TDE0OTkuMjQgMTA3MS41N0wxNDk5IDEwNzEuNzJWMTA3MlYxMDk0Wk0xMjg5LjUgMTAzNC41VjEwMzUuMzdMMTI5MC4yNSAxMDM0LjkzTDE1NTAuMjUgODg0LjQzM0wxNTUwLjUgODg0LjI4OFY4ODRWODAyLjVWODAyLjIwMkwxNTUwLjI0IDgwMi4wNkwxMjkwLjI0IDY2MS4wNkwxMjg5LjUgNjYwLjY2VjY2MS41VjEwMzQuNVpNMTM1NS43NSAxMTU5LjA3TDEzNTUuNTEgMTE1OC45M0wxMzU1LjI3IDExNTkuMDZMMTI4OS43NyAxMTkzLjU2TDEyODkuNSAxMTkzLjdWMTE5NFYxNTEwLjVWMTUxMS4zNkwxMjkwLjI1IDE1MTAuOTNMMTU1MC4yNSAxMzYzLjQzTDE1NTAuNSAxMzYzLjI5VjEzNjNWMTI3Mi41VjEyNzIuMjFMMTU1MC4yNSAxMjcyLjA3TDEzNTUuNzUgMTE1OS4wN1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8zXzIpIiBzdHJva2U9IndoaXRlIi8+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfM18yIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC01LjUwMDE4IC05Ni4wMDAyKSByb3RhdGUoNTAuMDYyNCkgc2NhbGUoMzI0OS40NiAyODAwLjkpIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGMTIxMiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMzE3MTciLz4KPC9yYWRpYWxHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzNfMiIgeDE9IjE2ODciIHkxPSIxNTEuNSIgeDI9Ii0zNyIgeTI9IjMwNTEuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzYzNTM3Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzgwMDBGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo='
          alt='logo'
          height={30}
          width={30}
        />

        
        <div>
          <h1 className="font-bold">
            SAABI<span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2>
            Made with the help of DALL-E 2, ChatGPT & Azure
          </h2>
        </div>
      </div>

      {/* RIGHT DIV */}
      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
          <Link
            href=''
            className='px-2 font-light text-right'
          >
          SAABI AI
          </Link>
          <Link
            href=''
            className='px-2 font-light text-right'
          >
          Github Repo
          </Link>
      </div>
    </header>
  )
}

export default Header
