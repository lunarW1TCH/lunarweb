import * as CardUI from '~/components/ui/card';

const Card = (props: CardProps) => {
  const { description, title, children } = props;
  return (
    <CardUI.Root>
      <CardUI.Header>
        <CardUI.Title>{title}</CardUI.Title>
        <CardUI.Description>{description}</CardUI.Description>
      </CardUI.Header>
      <CardUI.Body>{children}</CardUI.Body>
    </CardUI.Root>
  );
};

export default Card;

type CardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};
