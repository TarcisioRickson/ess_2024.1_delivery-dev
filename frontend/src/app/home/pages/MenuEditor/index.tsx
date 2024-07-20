import styles from "./index.module.css";
import { useEffect, useState } from "react";
import PageSelector from "../../../../shared/components/PageSelector";
import PageBlock from "../../../../shared/components/PageBlock";
import CreateTest from "../CreateTest";
import ListTests from "../ListTests";
import SelectorButton from "../../../../shared/components/SelectorButton";
import ItemPage from "./ItensPage";
import { useParams } from "react-router-dom";

const MenuEditor = () => {
  // Constantes:
  const button_size = "fit-content"
  const button_font = 20
  const selected_color = "#EC7063"
  const buttons_side_padding = 25

  // Variaveis:
  const {restaurant_id, page=""} = useParams()
  const [blockIndex, setBlockIndex] = useState(0)

  // Funcao:
  const changePage = (page: string) => {
    window.location.href = `/${restaurant_id}/menu_editor/${page}`
  }

  const setSelectedButton = (button_id: number) => {
    return button_id === blockIndex
  }

  useEffect(() => {
    switch(`/${restaurant_id}/menu_editor/${page}`){
      case(`/${restaurant_id}/menu_editor`):
        setBlockIndex(0)
        break
      case(`/${restaurant_id}/menu_editor/menu`):
        setBlockIndex(0)
        break
      case(`/${restaurant_id}/menu_editor/itens`):
        setBlockIndex(1)
        break
      case(`/${restaurant_id}/menu_editor/categorias`):
        setBlockIndex(2)
        break
    }
  }, [restaurant_id, page, blockIndex])

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <PageSelector line_size={120} line_thickness={2} line_element_gap={0} line_color="gray">
          <SelectorButton onClick={() => changePage("menu")} selected={setSelectedButton(0)} font_size={button_font}
           width={button_size} side_padding={buttons_side_padding} color={selected_color}> Menu </SelectorButton>
          <SelectorButton onClick={() => changePage("itens")} selected={setSelectedButton(1)} font_size={button_font}
           width={button_size} side_padding={buttons_side_padding} color={selected_color}> Itens </SelectorButton>
          <SelectorButton onClick={() => changePage("categorias")} selected={setSelectedButton(2)} font_size={button_font}
           width={button_size} side_padding={buttons_side_padding} color={selected_color}> Categorias </SelectorButton>
        </PageSelector>
        <PageBlock
          elements={[<CreateTest />, <ItemPage restaurantId={restaurant_id} />, <ListTests />]} 
          index={blockIndex}
          border={0}
        />
      </div>
    </div>
  );
};

export default MenuEditor;
