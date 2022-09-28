import Image from "next/image"
import Link from "next/link"

type Props = {
  zoom: number
}

const LogoShort = ({ zoom }: Props) => (
  <Link href="/">
    <a>
      <Image
        src="/assets/icons/logo.svg"
        height={32 * zoom}
        width={75 * zoom}
        layout="fixed"
        alt="Cryptotech"
      />
    </a>
  </Link>
)

const defaultProps: Props = {
  zoom: 1,
}

LogoShort.defaultProps = defaultProps

export default LogoShort
