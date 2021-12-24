using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;


public class KeyMover : MonoBehaviour
{
    public Text TaskText;
    public GameObject Step2;
    public GameObject Step12;

    public static bool KeyDown = false;
    void OnMouseOver()
    {
        if (OnOff.step == 1 || OnOff.step == 11)
        {
            //<-
            if (Input.GetMouseButtonDown(0) && KeyDown == false)
            {
                transform.Rotate(-5.0f, 0.0f, 0.0f, Space.Self);
                KeyDown = true;
                OnOff.step = 2;
                Step2.GetComponent<Image>().color = new Color32(157, 255, 155, 255);

                TaskText.text = "Шаг 3. Поставьте ползунок линейки на отмекту 45см (ЛКМ - левее, ПКМ - правее)";
            }
            //->
            if (Input.GetMouseButtonDown(1) && KeyDown == true)
            {
                transform.Rotate(5.0f, 0.0f, 0.0f, Space.Self);
                KeyDown = false;
                OnOff.step = 12;
                Step12.GetComponent<Image>().color = new Color32(157, 255, 155, 255);
                TaskText.text = "Шаг 13. Выключите установку";
            }
        }
    }
}
