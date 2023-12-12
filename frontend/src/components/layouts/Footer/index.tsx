import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

import { joinClassnames } from "@/components/@joinClassnames";
import { URL_PATH } from "@/consts";

type Props = {
  className?: string;
};

/**
 * フッター
 */
export const Footer = ({ className }: Props) => {
  return (
    <footer className={joinClassnames(styles.base, className)}>
      <div>
        <Image src={"/icon.svg"} alt="Icon" width={50} height={50} />
      </div>
      <div>
        <h1>VolunScout</h1>
      </div>
      <div>
        <Link href={URL_PATH.TERMS_OF_SERVICE}>利用規約</Link>
      </div>
      <div>
        <Link href={URL_PATH.PRIVACY_POLICY}>プライバシーポリシー</Link>
      </div>
      <div>
        <Link href={URL_PATH.CONTACT}>お問い合わせ</Link>
      </div>
    </footer>
  );
};