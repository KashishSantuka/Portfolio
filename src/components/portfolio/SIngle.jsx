export default function Single () {} ({ item }) => {

    const ref=useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
      });

      
  return <section>{item.title}</section>;
};