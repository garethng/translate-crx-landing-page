import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTAButton = ({ locale,btntype }: { locale: any, btntype: string  }) => {
  let svgCode = "";
  let className = "";
  if (btntype === "chrome") {
    svgCode = 'https://fonts.gstatic.com/s/i/productlogos/chrome_store/v7/192px.svg';
    className = "flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white h-12"
  } else if (btntype === "edge") {
    svgCode = 'https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/29bfeef37eef4ca3bcf962274c1c7766.png'
    className = "flex items-center gap-2 bg-white-500 hover:bg-white-600 text-balck h-12 border-sky-500 border-solid"
  }

  return (
    <Link
      href="https://chromewebstore.google.com/detail/auto-scroll/cmbpfcapjacpbmehmemljdilabjnlfhb"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <Button
        variant="default"
        className={ className }
        aria-label="Get Boilerplate"
      >
        <img src={svgCode} className="h-8"/>

        <div className="flex flex-col top-4">
          <p className="text-xs text-start">{locale.title}</p>
          <p className="text-lg text-center">{locale.store}</p>
        </div>
        
      </Button>
    </Link>
  );
};

export default CTAButton;
