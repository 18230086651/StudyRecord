$(function() {
    $.ajax({
        type: "get",
        url: "//localhost:3008/shoppingCart",
        data: "data",
        dataType: "json",
        success: function(response) {

            $('.shop a').each(function(idx, ele) {
                //店铺名称
                ele.innerText = response[idx].shoppingName;
                var markParent = $(ele).parents('.g-content');
                markParent.find('.list-img img').each(function(index, eles) {
                    //图片
                    $(eles).attr('src', response[idx].goodsList[index].shopPicimg);
                });
                markParent.find('.list-title>a').each(function(index, eles) {
                    //商品标题
                    $(eles).html(response[idx].goodsList[index].title);
                });
                markParent.find('.goodsColor span').each(function(index, eles) {
                    //商品颜色
                    $(eles).text(response[idx].goodsList[index].goodsColor);
                });
                markParent.find('.goodsType span').each(function(index, eles) {
                    //商品类型
                    $(eles).text(response[idx].goodsList[index].goodsType);
                });
                markParent.find('.list-price strong').each(function(index, eles) {
                    //商品单价
                    $(eles).text(response[idx].goodsList[index].unitPrice);
                });
                markParent.find('.list-all-price strong').each(function(index, eles) {
                    ///商品单价
                    $(eles).text(response[idx].goodsList[index].unitPrice);
                });
                markParent.find('.list-input input').each(function(index, eles) {
                    //商品数量
                    $(eles).val(response[idx].goodsList[index].goodsCount);
                });

            });
        }
    });

    //所有商家全选
    $('.checkboxAll').change(function() {
        var that = $(this);
        var checkedVal = that[0].checked;
        $('.g-centre input').each(function(index, ele) {
            ele.checked = checkedVal;
        });
        allPrice();
    });
    //单家商店商品全选
    $('.shop input').change(function() {
        var that = $(this);
        var spintMark = true;
        var checkedVal = that[0].checked;
        that.parents('.g-content').find('.list-checkbox').each(function(index, ele) {
            ele.checked = checkedVal;
        });
        $('.shop input').each(function(index, ele) {
            if (!ele.checked) {
                spintMark = false;
            };
        });
        if (!spintMark) {
            $('.checkboxAll').each(function(index, ele) {
                // console.log(ele.checked);
                ele.checked = false;
            });
        } else {
            $('.checkboxAll').each(function(index, ele) {
                // console.log(ele.checked);
                ele.checked = true;
            });
        };
        allPrice();
    });
    //单家商店判断商品全选
    $('.list-checkbox').change(function() {
        var that = $(this);
        var gList = that.parents('.g-list');
        // console.log(gList[0]);
        var mark = true;
        var allMark = true;
        gList.find('.list-checkbox').each(function(index, ele) {
            if (!ele.checked) {
                mark = false;
            };
        });
        if (!mark) {
            gList.find('.shop input')[0].checked = false;

        } else {
            gList.find('.shop input')[0].checked = true;
        };
        //单个商品背景移除
        that.parents('.item-box').removeClass('actives');
        $('.shop input').each(function(index, ele) {
            if (!ele.checked) {
                allMark = false;
            };
        });
        if (!allMark) {
            $('.checkboxAll').each(function(index, ele) {
                ele.checked = false;
            });
        } else {
            $('.checkboxAll').each(function(index, ele) {
                ele.checked = true;
            });
        };
        allPrice();
    });
    //选择商品数量 false 减少商品数量 true增加商品数量
    goodsselect('.list-input a:nth-child(1)', false)
    goodsselect('.list-input a:nth-child(3)', true)
        //初始化单个商品总额
    for (var i = 0; i < $('.item-list').length - 1; i++) {
        var itemList = $($('.item-list')[i]);
        var inputVal = $('.list-input input')[i].value * 1;
        singlePrice(itemList, inputVal);
    };
    //初始化所用商品总价
    allPrice();
    //删除商品
    $('.list-other a:nth-child(1)').click(function() {
        var selectGoods = confirm('您确定要删除所选商品吗？');
        if (selectGoods) {
            var that = $(this);
            var gContent = that.parents('.g-content');
            var itmNum = gContent.find('.item-box').length;
            if (itmNum <= 1) {
                gContent.remove();
            } else {
                that.parents('.item-box').remove();
            };
        };
    });
    //商品选择
    function goodsselect(selector, sele) {
        $(selector).click(function() {
            var that = $(this);
            var itemList = that.parents('.item-list');
            if (sele) {
                var input = $(this).prev();
                var inputVal = input.val();
                inputVal++;
            } else {
                var input = $(this).next();
                var inputVal = input.val();
                inputVal--;
            };
            if (inputVal >= 1) {
                input.val(inputVal);
                //单个商品总额计算
                singlePrice(itemList, inputVal);
                //所用商品总价
                allPrice();
                //所有商品数量
            } else {
                alert('商品数量不能小于零')
            };
        });
    };

    //删除所选商品
    $('.clearGoods').click(function() {

        checkedOrno('请您选择要删除的商品！', function() {
            var clearMark = confirm('您确定要删除所选商品吗？');
            if (clearMark) {
                $('.list-checkbox').each(function(index, ele) {
                    if (ele.checked) {
                        var gContent = $(ele).parents('.g-content');
                        var itmNum = gContent.find('.item-box').length;
                        if (itmNum <= 1) {
                            gContent.remove();

                            $('.checkboxAll').each(function(index, ele) {
                                ele.checked = false;
                            });
                        } else {
                            $(ele).parents('.item-box').remove();
                        };

                    };

                });
            };

        });

    });

    //结算
    $('.g-bottom-go a').click(function() {
        checkedOrno('请您选择要购买的商品！', function() {
            alert('数据已提交！');
            //数据传送
        })
    });

    //清空购物车
    $('.emptyGoods').click(function() {
        var yesOrno = confirm("您确定要清空购物车吗？");
        if (yesOrno) {
            $('.g-body').remove();
        }
    });

    function singlePrice(itemList, inputVal) {
        var listPrice = itemList.find('.list-price strong').text().replace('￥', ''); //单价
        var goodsPrice = inputVal * listPrice;
        itemList.find('.list-all-price strong').text('￥' + goodsPrice.toFixed(2));
    };

    function allPrice() {
        var allGoodsprice = 0;
        var marksNum = 0;
        var allNums = 0;
        $('.list-checkbox').each(function(index, ele) {
            if (!ele.checked) {
                marksNum++;
            };
        })
        $('.list-checkbox').each(function(index, ele) {
            var that = $('.list-checkbox');
            if (ele.checked) {
                // console.log(ele.checked);
                var allprices = $(ele).parents('.item-list').find('.list-all-price strong').text().replace('￥', '') * 1;
                var allNum = $(ele).parents('.item-list').find('.list-input input').val() * 1;
                // console.log(allprices);
                allGoodsprice += allprices;
                allNums += allNum;
                $(ele).parents('.item-box').addClass('actives');
                $('.bottom-all-price strong').text('￥' + allGoodsprice.toFixed(2));
                $('.g-bottom-num span').text(allNums);
            };


            if (marksNum === that.length) {
                $(ele).parents('.item-box').removeClass('actives');
                $('.bottom-all-price strong').text('￥0.00');
                $('.g-bottom-num span').text(allNums);
            };

        });
    };


    function checkedOrno(text, fn) {
        var marknum = 0;
        $('.list-checkbox').each(function(index, ele) {
            if (ele.checked) {
                marknum++;
            };
        });
        if (marknum === 0) {
            confirm(text);
        } else {
            fn();
        };
    };

});