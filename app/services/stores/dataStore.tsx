import create from 'zustand';

interface SelectProps {
  name: string;
  slug: string;
  selected: boolean;
}

interface ZustandProps{
  select: SelectProps[];
  setSelect: (select: SelectProps[]) => void;
  countSelect: number;
  setCountSelect: (countSelect: number) => void;
 }

export const useStore = create<ZustandProps>((set) => ({
  select: {} as SelectProps[],
  setSelect: (select) => set({select}),
  countSelect: -1,
  setCountSelect: (countSelect) => set({countSelect}),
}))