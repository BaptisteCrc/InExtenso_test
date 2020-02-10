import React from'react'

class Form extends React.Component{
    allcheckbox(event) {
        var all = document.getElementsByClassName("item")
  
        if (event.target.checked === true) {
            for (var cn in all) {
                if (all[cn].checked === false)
                    all[cn].checked = true;
            }
        }

        if ( event.target.checked === false) {
            for (var cn1 in all) {
                if (all[cn1].checked === true)
                    all[cn1].checked = false;
            }
        }
    }
 
    is_allchecked(event) {
        var all = document.getElementsByClassName("item")
        var select = document.getElementsByClassName("select_all")
        var is_allchecked = true

        for (var count in all) {
            if (all[count].checked === false)
                is_allchecked = false;
        }

        if (is_allchecked === true)
            select[0].checked = true;
        else
            select[0].checked = false;
    }
    render () {
        return (
            <div className="form">
                <input type="checkbox" class="select_all" onChange={this.allcheckbox}></input>Select All<br></br>
                <input type="checkbox" class="item" id="item-1" onChange={this.is_allchecked}></input>Item 1<br></br>
                <input type="checkbox" class="item" id="item-2" onChange={this.is_allchecked}></input>Item 2<br></br>
                <input type="checkbox" class="item" id="item-3" onChange={this.is_allchecked}></input>Item 3<br></br>
                <input type="checkbox" class="item" id="item-4" onChange={this.is_allchecked}></input>Item 4<br></br>
            </div>
        )
    }
}
export default Form