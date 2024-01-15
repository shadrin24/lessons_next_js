import Link from "next/link";

export default function Client() {
    return (
        <div>
            <h1>Client страница</h1>
            <Link href='/'>Гланая</Link><br/>
            <Link href='/client/12345'>Клиент12345</Link>
        </div>
    )
}
