

type Props = {
    children: React.ReactNode;
    textColor?: string;
}

export const HText = ({children, textColor}: Props) => {
    return (
        <h2 className={`${textColor} basis-3/5 font-montserrat text-3xl font-bold`}>
            {children}
        </h2>
    )
}
