import { Button } from "@/components/ui/button";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const CTAButton = ({ locale,btntype }: { locale: any, btntype: string  }) => {
  let svgCode = "";
  let className = "";
  let store = ""
  let link = ""
  if (btntype === "chrome") {
    svgCode = '/images/chromestore.svg';
    className = "flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white h-12"
    store = locale.storeChrome
    link = "https://chromewebstore.google.com/detail/auto-scroll/cmbpfcapjacpbmehmemljdilabjnlfhb"
  } else if (btntype === "edge") {
    svgCode = '/images/edge.png'
    className = "flex items-center gap-2 bg-white-500 hover:bg-white-600 text-balck h-12 border border-gray-500"
    store = locale.storeEdge
    link = "https://microsoftedge.microsoft.com/addons/detail/auto-scroll/lnmdcgidhppfifogfeejdbbabheijcjl"
  }

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <Button
        variant="default"
        className={ className }
        aria-label="Get App"
      >
        <Image
          src={svgCode}
          className="h-8"
          alt="store"
        />

        <div className="flex flex-col top-4">
          <p className="text-xs text-start">{locale.title}</p>
          <p className="text-lg text-center">{store}</p>
        </div>
        
      </Button>
    </Link>
  );
};

export default CTAButton;
