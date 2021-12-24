using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class OnOff : MonoBehaviour
{
    public Text TaskText;
    public GameObject Step1; 
    public GameObject Step13;

    
    public static int step = 0;

    void OnMouseDown()
    {
        if (PLAY.IsOn == true && step == 0)
        {
            transform.Translate(0, 0, -0.4f);
            PLAY.IsOn = true;
            step = 1;
            Step1.GetComponent<Image>().color = new Color32(157, 255, 155, 255);
            TaskText.text = "Шаг 2. Замкните ключ (ЛКМ - замкнуть, ПКМ - размкнуть)";
        }
        else if (PLAY.IsOn == true && step == 12 )
        {
            transform.Translate(0, 0, 0.4f);
            PLAY.IsOn = false;
            step = 13;
            Step13.GetComponent<Image>().color = new Color32(157, 255, 155, 255);
            TaskText.text = "Поздравляю, Вы выполнили измерение спотивления мостовым методом, результат указан в крайней справа колонке таблицы";
        }
    }


}


