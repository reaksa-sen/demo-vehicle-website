interface Props{
  title: string;
  style?: string;
  subTitle: string;
}

export const YearInBussiness: React.FC<Props> = props => {
  const { title, style, subTitle } = props;
  // const first= 'flex items-center space-x-8'
  return (
      <div>
          <div className={`${style ==  'col'? ' gap-x-8 md:flex-row flex-col' : 'flex-col'} flex text-center items-center `}>
              <h1 className={`${style == 'col' ? 'sm:text-9xl text-primary text-8xl' : 'text-5xl'} font-sans text-center font-bold items-center`}>{ title}</h1>
              <h2 className={`${style == 'col' ? 'text-2xl font-bold max-w-[100px] text-center' : 'text-xs text-primary max-w-xl text-center'} font-bold font-sans items-center`}>{subTitle}</h2>
          </div>
      </div>
  )
}