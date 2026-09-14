import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Script from "../ui/Script";

const COLUMN_ONE = [
  { name: "Dissociation", href: "https://www.conejovalleycounseling.com/dissociative-identity-disorder-therapist-newbury-park" },
  { name: "Trauma", href: "https://www.conejovalleycounseling.com/trauma-counseling-newbury-park" },
  { name: "Family conflict", href: null },
  { name: "Special needs parenting", href: "https://www.conejovalleycounseling.com/counseling-special-needs-parents-newbury-park" },
  { name: "Depression", href: "https://www.conejovalleycounseling.com/anxiety-depression" },
  { name: "Marriage", href: "https://www.conejovalleycounseling.com/couples-therapy" },
];

const COLUMN_TWO = [
  { name: "Anxiety", href: "https://www.conejovalleycounseling.com/anxiety-depression" },
  { name: "Relationships", href: null },
  { name: "Children", href: "https://www.conejovalleycounseling.com/children-and-teens" },
  { name: "Teens", href: "https://www.conejovalleycounseling.com/children-and-teens" },
  { name: "Intimacy & connection", href: "https://www.conejovalleycounseling.com/couples-therapy" },
  { name: "…and more.", href: null },
];

/* Confirmed per-item spec:
   - Outer li wrapper: 388×63px
   - Text: 15px Muli / line-height 27px / weight 300 / uppercase (Eyebrow token ✓)
   - Items align to top-left of the wrapper: pt-0 pb-[36px]
   - 0(pt) + 27(text) + 36(pb) = 63px ✓
   - border-b border-tan 12px above the bottom on all items except last */
function ExpertiseColumn({ items }) {
  return (
    <ul className="flex flex-col gap-[11px]">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={item.name}>
            <Eyebrow
              as="div"
              className={`pt-0 ${
                isLast ? "pb-[36px]" : "pb-[24px] mb-[12px] border-b border-tan"
              }`}
            >
              {item.href ? (
                <a href={item.href} className="hover:text-teal">
                  {item.name}
                </a>
              ) : (
                item.name
              )}
            </Eyebrow>
          </li>
        );
      })}
    </ul>
  );
}

export default function AreasOfExpertise() {
  return (
    <section className="bg-white">
      <Container className="py-[106.908px]">

        {/* Mobile: simple stacked layout */}
        <div className="flex flex-col gap-4 lg:hidden">
          <h3 className="font-serif text-h3 font-light text-ink">
            Our areas of<br /><Script>expertise</Script>
          </h3>
          <ExpertiseColumn items={COLUMN_ONE} />
          <ExpertiseColumn items={COLUMN_TWO} />
        </div>

        {/* Desktop: flex with explicit per-child margins.
            CSS grid gap-x is UNIFORM — it cannot be 110px between h3→col1
            and 12px between col1→col2 simultaneously. Flex + mr solves this.

            Layout math (all from Container content left = 67px from viewport at 1321px):
              h3 box:   w-[289px]  +  mr-[110px]  → expertise col 1 starts at 466px ✓
              col 1:    w-[388px]  +  mr-[12px]   → expertise col 2 starts at 866px
              col 2:    w-[388px]
              Total: 289+110+388+12+388 = 1187px = Container content width ✓ */}
        <div className="hidden lg:flex lg:items-start">
          {/* pl-[50px] indents the h3 text 50px within the 289px column
              without shifting the column box right (unlike ml-[50px] would). */}
          <h3 className="w-[289px] shrink-0 mr-[110px] pl-[50px] font-serif text-h3 font-light text-ink">
            Our areas of<br /><Script>expertise</Script>
          </h3>
          <div className="w-[388px] shrink-0 mr-[12px]">
            <ExpertiseColumn items={COLUMN_ONE} />
          </div>
          <div className="w-[388px] shrink-0">
            <ExpertiseColumn items={COLUMN_TWO} />
          </div>
        </div>

      </Container>
    </section>
  );
}
