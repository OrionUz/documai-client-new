import React from 'react'
import { useTranslation } from 'react-i18next';

interface IProps {
  text: string;
  pStyle?: React.CSSProperties;
}

const TranslatedComponents = (props: IProps) => {
  const { t } = useTranslation();

  const texts = t(props.text).split('\n');
  return (
    <div>
      {texts?.map((text) => (
        <>
          <p key={text} style={props.pStyle}>
            {text}
          </p>
          <p></p>
        </>
      ))}
    </div>
  );
};

export default TranslatedComponents