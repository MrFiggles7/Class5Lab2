$(document).ready(
    function () {


        $("input[name=learninput]").change(updateLearn);
        $("input[name=donateinput]").change(updateDonate);
        $("input").change(updateTotal);
        var subtotal = 0;

        function updateLearn()
        {
            var quantitylearn = parseFloat($("#learninput").val());



            var learnprice = $(this).data("learn");

            $("#learntotal").text("$" + (quantitylearn * learnprice));

            subtotal += quantitylearn * learnprice;

        }

        function updateDonate()
        {
            var quantitydonate = parseFloat($("#donateinput").val());

            var donateprice = $(this).data("donate");

            $("#donatetotal").text("$" + (quantitydonate * donateprice));

            subtotal += quantitydonate * donateprice;
        }

        function updateTotal()
        {
            $("#total").text("$" + subtotal);
        }

    }
);