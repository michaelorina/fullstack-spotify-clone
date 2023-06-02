interface BoxProps{
    children: React.ReactNode;
    classname?: string;
}
const Box: React.FC<BoxProps> = ({
    children,
    classname
}) => {
    return(
        <div>
            {children}
        </div>
    );
}
export default Box;