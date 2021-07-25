import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'

function Navigation () {
    return (
    <div>
      <Head>
        <title>Walmart Frontend Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav
        style={{
          display: "flex",
          width: "100%",
          height: "75px",
          background: "#0071DC",
        }}
      >
        <div
          style={{
            position: "relative",
            paddingTop: "1rem",
            paddingLeft: "1rem",
          }}
        >
          <Image src="/sparkle.svg" alt="walmart logo" width={30} height={30} />
        </div>
      </nav>
    </div>
    )

}

export default Navigation