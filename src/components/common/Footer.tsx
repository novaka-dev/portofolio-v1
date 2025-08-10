import { footerConfig } from "@/config/Footer";
import { Container } from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <Container className="py-10 mb-16 border-t ">
      <div className="flex flex-col justify-center items-center ">
        <p className="text-sm text-muted-foreground">
          {footerConfig.text}{" "}
          <Link
            href={footerConfig.developerUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="font-semibold hover:underline"
          >
            {footerConfig.developer}
          </Link>
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {footerConfig.copyright}
        </p>
      </div>
    </Container>
  );
}
