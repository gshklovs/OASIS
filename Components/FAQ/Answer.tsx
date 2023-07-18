export default function FAQAnswer(props: any) {
  return (
    <div className="w-full inline-block bg-gray-100 text-gray-900 hover:shadow-2xl rounded-2xl p-4 my-2">
      {props.answer}
    </div>
  );
}
