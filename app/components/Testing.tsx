import React from 'react';
// import * as Accordion from '@radix-ui/react-accordion';
import Plus from '../../public/assets/Plus.svg';
import Image from 'next/image';

type Props = {};

const items = [
  {
    question: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  },
  {
    question: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  },
  {
    question: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  },
  {
    question: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  },
  {
    question: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  },
];

const Testing = (props: Props) => {
  return (
    // <Accordion.Root
    //   type="single"
    //   defaultValue="item-1"
    //   collapsible
    //   className="flex flex-col gap-y-4"
    // >
    //   {items.map((item, index) => (
    //     <div key={index}>
    //       <Accordion.Item
    //         value={`item-${index + 1}`}
    //         className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
    //       >
    //         <Accordion.Header>
    //           <Accordion.Trigger className="flex w-full items-center justify-between">
    //             <p className="text-left font-medium text-[#172026] lg:text-[18px]">
    //               {item.question}
    //             </p>
    //             <Image
    //               src={Plus}
    //               alt="See more"
    //               className="h-10 w-10 lg:w-6 lg:h-6"
    //             />
    //           </Accordion.Trigger>
    //         </Accordion.Header>

    //         <Accordion.Content>
    //           <p className="pt-2 text-[#36485C]">{item.answer}</p>
    //         </Accordion.Content>
    //       </Accordion.Item>
    //     </div>
    //   ))}
    // </Accordion.Root>
    <h1>hehe</h1>
  );
};

export default Testing;
