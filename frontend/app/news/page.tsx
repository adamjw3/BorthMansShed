import Image from "next/image";
import Link from "next/link";
export default function News() {
  return (
    <div>
      <header className="bg-black block w-full relative z-10">
        <div className="container mx-auto py-6 flex justify-between items-center">
          <a href="/" className="relative w-[140px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="134" height="97" fill="none" className="w-full max-w-full">
              <path
                fill="#fff"
                d="M24.53 57.85c.75 0 1.38-.09 1.89-.27.51-.18.915-.42 1.215-.72.31-.3.53-.65.66-1.05.14-.4.21-.825.21-1.275 0-.47-.075-.89-.225-1.26-.15-.38-.385-.7-.705-.96-.32-.27-.735-.475-1.245-.615-.5-.14-1.105-.21-1.815-.21H20.45v6.36h4.08Zm-4.08-15.42v6.27h3.21c1.38 0 2.42-.25 3.12-.75.71-.5 1.065-1.295 1.065-2.385 0-1.13-.32-1.935-.96-2.415-.64-.48-1.64-.72-3-.72H20.45Zm3.435-3.12c1.42 0 2.635.135 3.645.405 1.01.27 1.835.655 2.475 1.155.65.5 1.125 1.105 1.425 1.815.3.71.45 1.51.45 2.4 0 .51-.075 1-.225 1.47-.15.46-.385.895-.705 1.305-.31.4-.71.765-1.2 1.095-.48.33-1.055.61-1.725.84 2.98.67 4.47 2.28 4.47 4.83 0 .92-.175 1.77-.525 2.55-.35.78-.86 1.455-1.53 2.025-.67.56-1.495 1-2.475 1.32-.98.32-2.1.48-3.36.48h-8.19V39.31h7.47Zm32.961 10.845c0 1.59-.265 3.065-.795 4.425-.52 1.35-1.26 2.52-2.22 3.51-.96.99-2.115 1.765-3.465 2.325-1.35.55-2.85.825-4.5.825-1.64 0-3.135-.275-4.485-.825-1.35-.56-2.51-1.335-3.48-2.325-.96-.99-1.705-2.16-2.235-3.51-.53-1.36-.795-2.835-.795-4.425 0-1.59.265-3.06.795-4.41.53-1.36 1.275-2.535 2.235-3.525.97-.99 2.13-1.76 3.48-2.31 1.35-.56 2.845-.84 4.485-.84 1.1 0 2.135.13 3.105.39.97.25 1.86.61 2.67 1.08a9.433 9.433 0 0 1 2.175 1.695c.65.66 1.2 1.4 1.65 2.22.45.82.79 1.71 1.02 2.67.24.96.36 1.97.36 3.03Zm-4.125 0c0-1.19-.16-2.255-.48-3.195-.32-.95-.775-1.755-1.365-2.415a5.831 5.831 0 0 0-2.16-1.515c-.84-.35-1.79-.525-2.85-.525s-2.015.175-2.865.525c-.84.35-1.56.855-2.16 1.515-.59.66-1.045 1.465-1.365 2.415-.32.94-.48 2.005-.48 3.195s.16 2.26.48 3.21c.32.94.775 1.74 1.365 2.4.6.65 1.32 1.15 2.16 1.5.85.35 1.805.525 2.865.525 1.06 0 2.01-.175 2.85-.525.85-.35 1.57-.85 2.16-1.5.59-.66 1.045-1.46 1.365-2.4.32-.95.48-2.02.48-3.21Zm14.224-.525c.76 0 1.42-.095 1.98-.285.57-.19 1.035-.45 1.395-.78.37-.34.645-.74.825-1.2.18-.46.27-.965.27-1.515 0-1.1-.365-1.945-1.095-2.535-.72-.59-1.825-.885-3.315-.885h-2.58v7.2h2.52ZM77.325 61H73.68c-.69 0-1.19-.27-1.5-.81l-4.56-6.945c-.17-.26-.36-.445-.57-.555-.2-.11-.5-.165-.9-.165h-1.725V61H60.39V39.31h6.615c1.47 0 2.73.155 3.78.465 1.06.3 1.925.725 2.595 1.275.68.55 1.18 1.21 1.5 1.98.32.76.48 1.6.48 2.52 0 .73-.11 1.42-.33 2.07-.21.65-.52 1.24-.93 1.77-.4.53-.9.995-1.5 1.395-.59.4-1.265.715-2.025.945.26.15.5.33.72.54.22.2.42.44.6.72l5.43 8.01ZM94.26 42.625h-6.54V61h-4.035V42.625h-6.54V39.31H94.26v3.315Zm21.124-3.315V61h-4.05v-9.48h-10.185V61h-4.05V39.31h4.05v9.33h10.185v-9.33h4.05Z"
              />
              <path fill="#fff" fillRule="evenodd" d="M4 29h126v44h-14v4h18V25H0v52h22v-4H4V29Z" clipRule="evenodd" />
              <path
                fill="#fff"
                d="M38.718 70.969V81h-1.19v-7.371c0-.098.002-.203.007-.315l.028-.343-3.444 6.272c-.107.21-.27.315-.49.315h-.196c-.22 0-.383-.105-.49-.315l-3.514-6.3c.028.247.042.476.042.686V81h-1.19V70.969h1.001c.121 0 .215.012.28.035.065.023.128.089.189.196l3.465 6.174c.056.112.11.229.161.35.056.121.107.245.154.371.047-.126.096-.25.147-.371.051-.126.107-.245.168-.357l3.402-6.167c.056-.107.117-.173.182-.196a.94.94 0 0 1 .287-.035h1.001Zm8.753 8.925L47.464 81h-6.181V70.969h6.181v1.106h-4.823v3.332h3.906v1.064h-3.906v3.423h4.83Zm10.019-8.925V81h-.679a.606.606 0 0 1-.273-.056.698.698 0 0 1-.21-.189l-5.803-7.56a8.74 8.74 0 0 1 .028.658V81h-1.19V70.969h.7c.06 0 .112.005.154.014.042.005.08.016.112.035a.318.318 0 0 1 .098.07.829.829 0 0 1 .105.112l5.803 7.553-.028-.35a8.384 8.384 0 0 1-.007-.329v-7.105h1.19Zm3.131-.672a3.233 3.233 0 0 1 .42 2.142c-.056.36-.172.705-.35 1.036a3.118 3.118 0 0 1-.707.882l-.378-.245c-.07-.042-.102-.096-.098-.161a.308.308 0 0 1 .07-.168 2.06 2.06 0 0 0 .308-.539c.09-.215.145-.443.168-.686a2.486 2.486 0 0 0-.035-.763 2.235 2.235 0 0 0-.287-.756c-.06-.098-.079-.184-.056-.259a.295.295 0 0 1 .175-.175l.77-.308Zm7.559 2.24a.536.536 0 0 1-.14.161.298.298 0 0 1-.175.049c-.08 0-.173-.04-.28-.119a4.206 4.206 0 0 0-.406-.259 2.948 2.948 0 0 0-.581-.266 2.47 2.47 0 0 0-.82-.119 2.37 2.37 0 0 0-.804.126c-.23.08-.423.189-.581.329-.154.14-.271.306-.35.497a1.54 1.54 0 0 0-.12.609c0 .28.068.513.204.7.14.182.322.338.546.469a4.5 4.5 0 0 0 .77.343c.289.093.583.191.882.294.303.103.597.22.882.35.289.126.546.287.77.483.228.196.41.436.546.721.14.285.21.635.21 1.05 0 .439-.075.852-.224 1.239-.15.383-.37.716-.658 1.001a3.018 3.018 0 0 1-1.057.672 3.86 3.86 0 0 1-1.421.245 4.38 4.38 0 0 1-1.778-.35 4.217 4.217 0 0 1-1.365-.959l.392-.644a.487.487 0 0 1 .133-.126.322.322 0 0 1 .182-.056.37.37 0 0 1 .203.077c.079.047.168.107.266.182s.21.156.336.245c.126.089.268.17.427.245.163.075.347.138.553.189.205.047.436.07.693.07.322 0 .609-.044.86-.133.253-.089.465-.212.638-.371.177-.163.312-.357.406-.581a1.93 1.93 0 0 0 .14-.749c0-.303-.07-.55-.21-.742a1.658 1.658 0 0 0-.54-.49c-.223-.13-.48-.24-.77-.329-.289-.093-.583-.187-.881-.28-.3-.098-.593-.21-.882-.336a2.847 2.847 0 0 1-.77-.49c-.224-.2-.406-.45-.546-.749-.136-.303-.203-.677-.203-1.12 0-.355.067-.698.203-1.029.14-.331.34-.625.602-.882.266-.257.59-.462.973-.616.387-.154.83-.231 1.33-.231.56 0 1.068.089 1.526.266.462.177.868.434 1.218.77l-.33.644Zm11.183 0a.536.536 0 0 1-.14.161.298.298 0 0 1-.175.049c-.08 0-.172-.04-.28-.119a4.206 4.206 0 0 0-.406-.259 2.948 2.948 0 0 0-.58-.266 2.47 2.47 0 0 0-.82-.119 2.37 2.37 0 0 0-.805.126c-.228.08-.422.189-.58.329-.155.14-.272.306-.35.497a1.54 1.54 0 0 0-.12.609c0 .28.068.513.203.7.14.182.322.338.546.469a4.5 4.5 0 0 0 .77.343c.29.093.584.191.882.294.303.103.598.22.882.35.29.126.546.287.77.483.229.196.41.436.546.721.14.285.21.635.21 1.05 0 .439-.075.852-.224 1.239-.15.383-.368.716-.658 1.001a3.018 3.018 0 0 1-1.057.672 3.86 3.86 0 0 1-1.42.245 4.38 4.38 0 0 1-1.779-.35 4.217 4.217 0 0 1-1.365-.959l.392-.644a.487.487 0 0 1 .133-.126.322.322 0 0 1 .182-.056.37.37 0 0 1 .203.077c.08.047.168.107.266.182s.21.156.336.245c.126.089.269.17.427.245.163.075.348.138.553.189.206.047.436.07.693.07.322 0 .61-.044.861-.133.252-.089.465-.212.637-.371.177-.163.313-.357.406-.581a1.93 1.93 0 0 0 .14-.749c0-.303-.07-.55-.21-.742a1.658 1.658 0 0 0-.539-.49c-.224-.13-.48-.24-.77-.329-.29-.093-.583-.187-.882-.28-.299-.098-.593-.21-.882-.336a2.847 2.847 0 0 1-.77-.49c-.224-.2-.406-.45-.546-.749-.135-.303-.203-.677-.203-1.12 0-.355.068-.698.203-1.029.14-.331.34-.625.602-.882.266-.257.59-.462.973-.616.388-.154.83-.231 1.33-.231.56 0 1.069.089 1.526.266.462.177.868.434 1.218.77l-.329.644Zm10.598-1.568V81h-1.358v-4.564h-5.411V81h-1.358V70.969h1.358v4.473h5.41v-4.473h1.359Zm8.752 8.925L98.706 81h-6.18V70.969h6.18v1.106h-4.823v3.332h3.906v1.064h-3.906v3.423h4.83Zm10.586-3.906c0 .751-.119 1.435-.357 2.051a4.549 4.549 0 0 1-1.008 1.582c-.434.439-.956.78-1.568 1.022-.606.238-1.278.357-2.016.357h-3.745V70.969h3.745c.738 0 1.41.121 2.016.364a4.387 4.387 0 0 1 1.568 1.022c.434.439.77.966 1.008 1.582.238.616.357 1.3.357 2.051Zm-1.393 0c0-.616-.084-1.167-.252-1.652a3.482 3.482 0 0 0-.714-1.232 3.042 3.042 0 0 0-1.12-.77 3.886 3.886 0 0 0-1.47-.266h-2.387v7.833h2.387c.542 0 1.032-.089 1.47-.266a3.083 3.083 0 0 0 1.12-.763c.308-.336.546-.747.714-1.232.168-.485.252-1.036.252-1.652Z"
              />
              <path fill="#fff" fillRule="evenodd" d="M11.725 25 67 4.272 122.275 25h11.392L67 0 .333 25h11.392Z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </header>
      <div className="container mx-auto py-5">
        <div className="text-black text-base font-sans font-normal leading-10 space-y-6 my-6">
          <Link href="/">&lt; back</Link>
        </div>
        <div>
          <h1 className="text-5xl md:text-8xl text-black font-sans font-bold tracking-wider my-6">Borth Mens shed</h1>
          <div className="text-black text-base font-sans font-normal leading-10 space-y-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec eros maximus, ornare nisi a, feugiat justo. Nullam eu magna sed risus viverra euismod. Donec faucibus quam vitae
              faucibus blandit. Curabitur vitae justo rutrum, consectetur purus nec, lacinia lectus. Maecenas laoreet urna commodo tincidunt bibendum. Vivamus vel magna fringilla lacus sagittis
              commodo at ut arcu. Nulla ornare sem eu ex vestibulum, in placerat dolor dictum. Duis justo purus, suscipit eget odio sit amet, tempor blandit turpis. Donec vehicula lorem a ante
              eleifend molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sit amet consequat enim. Vivamus fermentum porta nibh sit amet
              sagittis.
            </p>
            <Image src="https://placehold.co/300x300" alt="Borths Mans Shed" width="300" height={300} unoptimized />
            <p>
              Suspendisse potenti. Donec est odio, pellentesque auctor molestie ac, aliquam ut est. Praesent non ligula nec mi accumsan euismod. Vestibulum sodales, dui sed maximus viverra, nibh eros
              posuere ligula, sed tristique quam tellus non arcu. Phasellus justo nulla, eleifend eget pretium vitae, imperdiet eu tellus. Morbi vel tellus in velit eleifend tincidunt et pretium
              dolor. Donec lacinia odio sem, nec aliquet nisl iaculis nec. Mauris feugiat laoreet eros, quis eleifend nisl rutrum eget. Sed lobortis eu augue nec sagittis. Duis molestie mollis mi, vel
              suscipit enim porta nec. Donec et orci iaculis, ullamcorper velit rutrum, vestibulum risus.
            </p>
            <p>
              Nulla eget aliquet dolor. Fusce vitae ultricies dolor. Curabitur finibus eu turpis ut fermentum. Suspendisse luctus, mauris a mollis efficitur, massa velit congue mauris, in auctor nisi
              tortor vitae velit. Fusce fermentum egestas mi quis venenatis. Mauris accumsan dignissim libero, nec varius justo pellentesque nec. Phasellus convallis fermentum erat facilisis rhoncus.
            </p>
            <Image src="https://placehold.co/300x300" alt="Borths Mans Shed" width="300" height={300} unoptimized />
            <p>
              Sed eget hendrerit ipsum. Suspendisse nisl libero, ullamcorper nec scelerisque sed, elementum eu odio. Aliquam erat volutpat. Mauris aliquam metus ac aliquet interdum. Vivamus purus
              nunc, viverra sed porta id, consequat ornare nisi. Integer efficitur efficitur nulla sed ornare. Pellentesque venenatis enim sed lacus sodales, ut sollicitudin ipsum fermentum. Mauris
              nulla lorem, interdum a ante condimentum, sodales pharetra justo. Sed mollis lobortis suscipit. Morbi accumsan tortor non dui mattis, quis gravida quam consectetur. Sed a laoreet nisi.
            </p>
            <p>
              In sed dapibus mauris. Fusce tristique, velit nec aliquet lobortis, metus ipsum dictum mi, id varius lectus erat eget tortor. Integer sit amet lorem in dui sodales gravida. Donec posuere
              efficitur commodo. Nulla maximus eget ligula at cursus. Maecenas ac dui in ipsum convallis porttitor. Donec sed tortor iaculis, pulvinar libero vel, tempor lectus. Quisque aliquam, lacus
              vel pretium rutrum, elit ligula elementum sem, et tincidunt ipsum massa nec massa. Vivamus rhoncus nisi nisi, ac scelerisque enim commodo ut. Mauris a rutrum enim, sed eleifend urna.
              Curabitur hendrerit ipsum vehicula, dictum quam vitae, pulvinar odio.
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-black w-full">
        <div className="container mx-auto py-32 flex flex-col md:flex-row justify-between items-center">
          <a href="/" className="relative w-[100px] h-[60px]">
            <Image src="https://placehold.co/100x60" alt="Borths Mans Shed" layout="fill" objectFit="contain" unoptimized />
          </a>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-sans">Contact Us</h3>
            </div>
            <div>
              <h3 className="font-sans">Stay In Touch</h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
