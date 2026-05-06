import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";


export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <a href="#" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">Shadcn</h3>
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <a href="#" className="opacity-60 hover:opacity-100">Github</a>
            </div>
            <div>
              <a href="#" className="opacity-60 hover:opacity-100">Twitter</a>
            </div>
            <div>
              <a href="#" className="opacity-60 hover:opacity-100">Instagram</a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <a href="#" className="opacity-60 hover:opacity-100">iOS</a>
            </div>
            <div>
              <a href="#" className="opacity-60 hover:opacity-100">Android</a>
            </div>
            <div>
              <a href="#" className="opacity-60 hover:opacity-100">Web</a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <a href="#" className="opacity-60 hover:opacity-100">Contact Us</a>
            </div>
            <div>
              <a href="#" className="opacity-60 hover:opacity-100">FAQ</a>
            </div>
            <div>
              <a href="#" className="opacity-60 hover:opacity-100">Feedback</a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <a href="#" className="opacity-60 hover:opacity-100">Twitch</a>
            </div>
            <div>
              <a href="#" className="opacity-60 hover:opacity-100">Discord</a>
            </div>
            <div>
              <a href="#" className="opacity-60 hover:opacity-100">Dribbble</a>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024 Designed and developed by
            <a
              target="_blank"
              href="https://github.com/leoMirandaa"
              rel="noreferrer"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Leo Miranda
            </a>
          </h3>
        </section>
      </div>
    </footer>
  );
};
