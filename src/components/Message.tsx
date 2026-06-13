type Props = {
  message: string;
};

const Message = ({ message }: Props) => {
  if (!message) return null;

  return <div className="toast">{message}</div>;
};

export default Message;
